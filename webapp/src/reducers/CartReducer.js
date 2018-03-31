import {
	ADD_ITEM,
	REMOVE_ITEM,
} from '../actions/types';

const INITIAL_STATE = {
	items: [],
	total: 0
};

export default (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_ITEM:
			return {
				items: [ ...state.items, action.payload ],
				total: parseFloat(state.total) + parseFloat(action.payload.price)
			};
		case REMOVE_ITEM:
			let removeId = action.payload;
			let removeIndex = state.items.findIndex(i => i.itemId === removeId);
			let itemPrice = state.items[removeIndex].price;

			if (removeIndex < 0) {
				return state;
			}
			let newItems = [...state.items.slice(0, removeIndex), ...state.items.slice(removeIndex + 1)];
			return { ...state, total: state.total - itemPrice, items: newItems };
		default:
			return state;
	};
};
