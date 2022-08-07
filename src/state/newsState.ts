import { atom } from 'jotai';
import { loadable } from 'jotai/utils';

import { LocalNews } from '@/models';

import { getNews } from '@/services';

import { topicState } from '@/state';

import { getFromLocalStorage } from '@/utils';

import { LocalKeys } from '@/config';

export const localNews = atom(async (get) => {
	/* if the post isn't local posts and selected posts are not the same, this condition will be false */
	const news = getFromLocalStorage<LocalNews>(LocalKeys.News);
	/* check if it is true and if we have the needed news for example: 
	This state will update change from react to angular's news */
	if (news?.from === get(topicState)) {
		return news;
	} else {
		const res = await getNews(get(topicState), 0);

		localStorage.setItem('news', JSON.stringify(res));

		return res;
	}
});

export const getNewsAtom = atom((get) => get(localNews));

export const newsLoadable = loadable(getNewsAtom);
