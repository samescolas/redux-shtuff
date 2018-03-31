import {
	TOGGLE_CART,
	TOGGLE_FILTER,
	TOGGLE_MENU_ITEM_MODAL,
} from './types';

export const toggleCart = () => {
	return { type: TOGGLE_CART };
}

export const toggleFilter = () => {
	return { type: TOGGLE_FILTER };
}

export const toggleMenuItemModal = () => {
	return { type: TOGGLE_MENU_ITEM_MODAL };
}
