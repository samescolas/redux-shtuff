import {
	ADD_TO_CART,
	REMOVE_FROM_CART
} from '../actions/types';

const INITIAL_STATE = {
	items: [
	],
	counts: {
	},
	total: 0
};

export default (state = INITIAL_STATE, action) => {
  let newCounts;
  switch (action.type) {
  	case ADD_TO_CART:
		const { label } = action.payload;
		newCounts = { ...state.counts }
		if (newCounts[label]) {
			newCounts[label] = state.counts[label] + 1;
		} else {
			newCounts[label] = 1;
		}

		return { 
			...state,
			counts: newCounts,
			total: state.total + parseFloat(action.payload.price),
			items: [ ...state.items, action.payload ]
		};
	case REMOVE_FROM_CART:
		let ix = state.items.findIndex(i => i.label == action.payload.label);
		let newItems = [];
		newCounts = { ...state.counts };
		newCounts[action.payload.label] = state.counts[action.payload.label] - 1;
		if (ix >= 0) {
			newItems = [ ...state.items.slice(0, ix), ...state.items.slice(ix+1) ];
		}
		return {
			...state,
			counts: newCounts,
			total: state.total - parseFloat(action.payload.total),
			items: newItems
		};
    default:
      return state;
  }
};
