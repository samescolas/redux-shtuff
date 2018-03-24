import {
	ADD_ITEM
} from './types';

export const add_item = (item) => {
	return {
		type: ADD_ITEM,
		payload: item
	};
};
