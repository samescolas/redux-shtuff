import {
	ADD_ITEM
} from '../actions/types';

const INITIAL_STATE = {
	items: [],
	total: 0
};

export default (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_ITEM:
			console.log("ADDING ITEM: ", action)
			return {
				items: [ ...state.items, action.payload ],
				total: parseFloat(state.total) + parseFloat(action.payload.price)
			};
		default:
			return state;
	};
};
