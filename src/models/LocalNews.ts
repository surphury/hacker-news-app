import { Post } from '@/config';

import { New } from '@/models';

export interface LocalNews {
	from: Post;
	page: number;
	posts: New[];
}
