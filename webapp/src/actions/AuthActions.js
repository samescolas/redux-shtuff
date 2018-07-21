import {
	AUTHORIZE_USER
} from './types';

export const authorize_user = (user) => {
	return {
		type: AUTHORIZE_USER,
		payload: user
	};
}
