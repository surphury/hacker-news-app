import { LocalKeys } from '@/config';

export const getFromLocalStorage = <T>(key: LocalKeys): T | null => {
	const localInfo = localStorage.getItem(key);
	if (localInfo) {
		return JSON.parse(localInfo) as T;
	} else {
		return null;
	}
};
