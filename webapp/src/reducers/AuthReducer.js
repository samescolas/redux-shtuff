import {
	ADD_ITEM_TO_CART,
	LOGIN_USER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  token: null,
  user: null,
  error: '',
  loading: false,
  cart: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  	case LOGIN_USER_SUCCESS:
		return { ...state, user: action.payload.user, token: action.payload.token };
  	case ADD_ITEM_TO_CART:
		return { ...state, cart: state.cart + 1 };
    default:
      return state;
  }
};
