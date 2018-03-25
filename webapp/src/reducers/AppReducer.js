import {
	TOGGLE_CART,
	TOGGLE_FILTER,
	FILTER_MENU
} from '../actions/types';

const INITIAL_STATE = {
	filterOpen: false,
	filter: null,
	cartOpen: false
};

export default (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case TOGGLE_CART:
			return { ...state, cartOpen: !state.cartOpen };
		case TOGGLE_FILTER:
			return { ...state, filterOpen: !state.filterOpen };
		case FILTER_MENU:
			return { ...state, filter: action.payload };
		default:
			return state;
	};
};
