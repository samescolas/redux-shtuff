import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import CartReducer from './CartReducer';
import MenuReducer from './MenuReducer';

export default combineReducers({
	auth: AuthReducer,
	cart: CartReducer,
	menu: MenuReducer
});
