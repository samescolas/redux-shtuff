import {
	LOGIN_USER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  token: null,
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  	case LOGIN_USER_SUCCESS:
		return { ...state, user: action.payload.user, token: action.payload.token };
    default:
      return state;
  }
};
