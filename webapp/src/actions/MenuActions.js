import {
	SET_MENU,
	FILTER_MENU,
	SELECT_MENU_ITEM
} from './types';
import { getRandomImage } from '../helpers';

const BASE_URL = 'https://restaurant-44353.firebaseio.com';

export const getMenu = () => (dispatch) => {
	return new Promise(function(resolve, reject) {
		fetch(`${BASE_URL}/menu.json`)
		.then(res => res.json())
		.then(menu => {
			Object.keys(menu).forEach(m => {
				Object.keys(menu[m]).forEach(s => {
					Object.keys(menu[m][s].menuLists).forEach(c => {
						menu[m][s].menuLists[c].items.map(i => {
							console.log(Object.keys(i.labels.photoURL))
							let newItem = Object.assign(i, {imageURL: i.labels.photoURL || getRandomImage()});
							return newItem;
						})
					})
				})
			});

			return menu;
		})
		.then(menu => {
			dispatch({
				type: SET_MENU,
				payload: menu
			});
			return menu;
		})
		.then(menu => resolve(menu))
		.catch(err => reject(err));
	});
};

export const filterMenu = (filter) => {
	return {
		type: FILTER_MENU,
		payload: filter
	};
};

export const selectMenuItem = (item) => {
	return {
		type: SELECT_MENU_ITEM,
		payload: item
	};
};
