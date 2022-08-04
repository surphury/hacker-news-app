import { atom } from 'jotai';

import { Post } from '@/config';
import { LocalNews } from '@/models';

export const PostsState = atom<Post>(
	/* if it doesn't has posts on localString select React's post */
	(JSON.parse(localStorage.getItem('news')!) as LocalNews)?.from || Post.React
);
