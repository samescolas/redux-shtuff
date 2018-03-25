import { combineReducers } from 'redux';

import AppReducer from './AppReducer';
import AuthReducer from './AuthReducer';
import CartReducer from './CartReducer';
import MenuReducer from './MenuReducer';

export default combineReducers({
	auth: AuthReducer,
	cart: CartReducer,
	menu: MenuReducer,
	appStatus: AppReducer
});
