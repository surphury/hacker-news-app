import { useEffect, useState, useRef, RefObject } from 'react';

export function useNearScreen({
	distance = '100px',
	externalRef,
	once = true
}: {
	distance?: string;
	externalRef: RefObject<HTMLDivElement>;
	once?: boolean;
}) {
	const [isNearScreen, setShow] = useState(false);
	const fromRef = useRef<HTMLDivElement>();

	useEffect(() => {
		const element = externalRef ? externalRef.current : fromRef.current;

		const onChange = (
			entries: IntersectionObserverEntry[],
			observer: IntersectionObserver
		) => {
			const el = entries[0];
			if (el.isIntersecting) {
				setShow(true);
				once && observer.disconnect();
			} else {
				!once && setShow(false);
			}
		};

		const observer = new IntersectionObserver(onChange, {
			rootMargin: distance
		});
		if (element) observer.observe(element);

		return () => observer && observer.disconnect();
	});

	return { isNearScreen, fromRef };
}
