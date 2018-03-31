import {
	SET_MENU,
	FILTER_MENU,
	SELECT_MENU_ITEM
} from '../actions/types';

const hr = (new Date()).getHours();
let meal;
if (hr < 11) {
	meal = 'breakfast';
} else if (hr < 16) {
	meal = 'lunch';
} else if (hr < 24) {
	meal = 'dinner';
}

const INITIAL_STATE = {
	meal,
	filteredMenu: null,
	selected: null,
};

export default (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_MENU:
			return { ...action.payload, ...state };
		case SELECT_MENU_ITEM:
			return { ...state, selected: action.payload };
		case FILTER_MENU:
			if (action.payload === null) {
				return { ...state, filter: null, filteredMenu: null };
			}

			const filtered = state.priceLists[state.meal].menuLists[action.payload];

			return {
				...state,
				filteredMenu: {
					labels: {...state.labels},
					menuLists: [{...filtered}]
				}
			};
		default:
			return state;
	};
};
