import { atom } from 'jotai';

import { New } from '@/models';

const localFavorites = atom<New[]>(
	localStorage.getItem('favorites')
		? (JSON.parse(localStorage.getItem('favorites')!) as New[])
		: []
);

export const favoritesState = atom(
	(get) => get(localFavorites),
	(get, set, favs: New[]) => {
		set(localFavorites, favs);
		localStorage.setItem('favorites', JSON.stringify(favs));
	}
);
