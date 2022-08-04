import { atom } from 'jotai';
import { loadable } from 'jotai/utils';

import { LocalNews } from '@/models';

import { getNews } from '@/services';

import { PostsState } from '@/state';

export const localNews = atom(async (get) => {
	const news = localStorage.getItem('news');

	/* if the post isn't local posts and selected posts are not the same, this condition will be false */
	if (news && (JSON.parse(news) as LocalNews).from === get(PostsState)) {
		return JSON.parse(news) as LocalNews;
	} else {
		const res = await getNews(get(PostsState), 0);

		localStorage.setItem('news', JSON.stringify(res));

		return res;
	}
});

export const getNewsAtom = atom((get) => get(localNews));

export const newsLoadable = loadable(getNewsAtom);
