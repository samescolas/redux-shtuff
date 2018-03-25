import {
	TOGGLE_CART,
	TOGGLE_FILTER
} from './types';

export const toggleCart = () => {
	return { type: TOGGLE_CART };
}

export const toggleFilter = () => {
	return { type: TOGGLE_FILTER };
}
