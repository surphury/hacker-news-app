import { useCallback, useEffect, useRef, useState } from 'react';
import { useAtom } from 'jotai';
import debounce from 'just-debounce-it';
import { useNavigate, useParams } from 'react-router-dom';

import { Cards, Card } from '@/components';

import { newsLoadable, topicState } from '@/state';

import { useNearScreen } from '@/hooks';

import { New } from '@/models';

import { getNews } from '@/services';

export function Posts() {
	const [news] = useAtom(newsLoadable);

	const navigate = useNavigate();

	const [topic] = useAtom(topicState);

	const [extraPosts, setExtraPosts] = useState<New[]>([]);

	const observedElement = useRef<HTMLDivElement>(null);

	const { isNearScreen } = useNearScreen({
		externalRef: observedElement,
		once: false
	});

	useEffect(() => {
		setPage(1);
		setExtraPosts([]);
	}, [topic]);

	const { pageNumber } = useParams();

	const [page, setPage] = useState(pageNumber ? parseInt(pageNumber) : 1);

	const debounceHandleNextPage = useCallback(
		debounce(() => {
			getNews(topic, page).then((res) => {
				setPage((page) => page + 1);

				setExtraPosts((oldPosts) => [...oldPosts, ...res.posts]);

				navigate(`/page/${page}`, { replace: true });
			});
		}, 2000),
		[page, topic]
	);

	useEffect(() => {
		if (isNearScreen) debounceHandleNextPage();
	}, [isNearScreen]);

	if (news.state === 'hasError') {
		return <div>Error getting data</div>;
	} else if (news.state === 'loading') {
		return <div>Loading</div>;
	} else {
		return (
			<>
				<Cards>
					{news.data.posts.map(
						({
							author,
							created_at_i,
							created_at,
							story_title,
							story_url
						}) => {
							return (
								<Card
									story_title={story_title}
									story_url={story_url}
									key={created_at_i}
									author={author}
									created_at_i={created_at_i}
									created_at={created_at}
								/>
							);
						}
					)}
					{extraPosts.map(
						({
							author,
							created_at_i,
							created_at,
							story_title,
							story_url
						}) => (
							<Card
								story_title={story_title}
								story_url={story_url}
								key={created_at_i}
								author={author}
								created_at_i={created_at_i}
								created_at={created_at}
							/>
						)
					)}
				</Cards>
				<div ref={observedElement}></div>
			</>
		);
	}
}
