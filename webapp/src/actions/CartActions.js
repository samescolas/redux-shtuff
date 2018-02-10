import {
	ADD_TO_CART,
	REMOVE_FROM_CART
} from './types';

export const removeItem = (item) => {
	return {
		type: REMOVE_FROM_CART,
		payload: item
	};
};

export const addItem = (item) => {
	return {
		type: ADD_TO_CART,
		payload: item
	};
};
