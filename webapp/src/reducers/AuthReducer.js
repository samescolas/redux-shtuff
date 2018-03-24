import {
	AUTHORIZE_USER
} from '../actions/types';

const INITIAL_STATE = {
	isLoggedIn: false,
	user: null
};

export default (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case AUTHORIZE_USER:
			return { ...state, user: action.payload, isLoggedIn: action.payload !== null };
		default:
			return state;
	};
};
