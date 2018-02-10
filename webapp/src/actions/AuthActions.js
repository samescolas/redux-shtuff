import {
  ADD_TO_CART
} from './types';

export const login = (email, password) => {
	console.log(email, password);
	if (/sam/.test(email) && password.length > 5) {
		console.log("Logged in!");
	} else {
		console.log("Authentication failure.");
	}

	return { type: ADD_TO_CART };
};
