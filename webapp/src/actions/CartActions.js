import {
	ADD_TO_CART,
	REMOVE_FROM_CART
} from './types';

export const removeItem = (item) => {
	console.log("Removing item ", item, "...");
	return {
		type: REMOVE_FROM_CART,
		payload: item
	};
};

export const addItem = (item) => {
	console.log("Adding item ", item, "...");
	return {
		type: ADD_TO_CART,
		payload: item
	};
};
