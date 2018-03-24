import { auth } from '../firebase';
import {
	AUTHORIZE_USER
} from './types';

export const authorize_user = (user) => {
	console.log("Inside authorize_user action");
	return {
		type: AUTHORIZE_USER,
		payload: user
	};
}
