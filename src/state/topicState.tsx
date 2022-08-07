import { atom } from 'jotai';

import { LocalKeys, Post } from '@/config';

import { LocalNews } from '@/models';

import { getFromLocalStorage } from '@/utils';

export const topicState = atom<Post>(
	getFromLocalStorage<LocalNews>(LocalKeys.News)?.from ?? Post.React
);
