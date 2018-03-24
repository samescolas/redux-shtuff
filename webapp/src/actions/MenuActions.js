import {
	SET_MENU,
	FILTER_MENU
} from './types';

const BASE_URL = 'https://restaurant-44353.firebaseio.com';

export const getMenu = () => (dispatch) => {
	return new Promise(function(resolve, reject) {
		fetch(`${BASE_URL}/menu.json`)
		.then(res => res.json())
		.then(res => {
			dispatch({
				type: SET_MENU,
				payload: res
			});
			return res;
		})
		.then(res => resolve(res))
		.catch(err => reject(err));
	});
};

export const filterMenu = (filter) => {
	return {
		type: FILTER_MENU,
		payload: filter
	};
};
