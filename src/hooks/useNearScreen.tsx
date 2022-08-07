import { useEffect, useState, RefObject } from 'react';

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

	useEffect(() => {
		const element = externalRef.current;

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

	return { isNearScreen };
}
