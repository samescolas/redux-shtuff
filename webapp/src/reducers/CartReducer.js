import {
	ADD_ITEM
} from '../actions';

const INITIAL_STATE = {
	items: [],
	total: 0
};

export default (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_ITEM:
			return {
				items: [ ...state.items, action.payload ],
				total: state.total + action.payload.price
			};
		default:
			return state;
	};
};
