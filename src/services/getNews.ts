import { Api, Post } from '@/config';

import { LocalNews, Response } from '@/models';

export async function getNews(query: Post, page: number): Promise<LocalNews> {
	const url = new URL(Api.Url);

	url.searchParams.append('query', query);
	url.searchParams.append('page', page.toString());

	const res = (await (await fetch(url.href)).json()) as Response;
	const news = res.hits
		.filter(({ story_title, story_url, created_at }) => {
			return story_title && story_url && created_at;
		})
		.map(({ author, created_at_i, created_at, story_title, story_url }) => {
			return {
				story_url,
				author,
				created_at_i,
				created_at,
				story_title
			};
		});

	return { from: query, posts: news, page };
}
