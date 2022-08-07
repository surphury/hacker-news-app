import { atom } from 'jotai';

import { New } from '@/models';

import { getFromLocalStorage } from '@/utils';
import { LocalKeys } from '@/config';

const localFavorites = atom(
	getFromLocalStorage<New[]>(LocalKeys.Favorites) ?? []
);

export const favoritesState = atom(
	(get) => get(localFavorites),
	(get, set, favs: New[]) => {
		set(localFavorites, favs);
		localStorage.setItem(LocalKeys.Favorites, JSON.stringify(favs));
	}
);
