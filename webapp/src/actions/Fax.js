import {
	SEND_FAX
} from './types';

export const send_fax = (order) => {
	console.log("Inside send_fax with order: ", order);
	return {
		type: SEND_FAX,
		payload: order
	};
}
