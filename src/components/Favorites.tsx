import { useAtom } from 'jotai';

import { Cards, Card } from '@/components';

import { favoritesState } from '@/state';

export function Favorites() {
	const [favorites] = useAtom(favoritesState);

	return (
		<Cards>
			{favorites.map((favPost) => (
				<Card key={favPost.created_at_i} {...favPost} />
			))}
		</Cards>
	);
}
