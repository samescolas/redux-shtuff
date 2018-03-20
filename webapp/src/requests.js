const BASE_URL = 'https://restaurant-44353.firebaseio.com';

export const getMenu = async () => {
	const hr = (new Date()).getHours();

	return fetch(`${BASE_URL}/menu.json`)
		.then(res => res.json())
		.then(res => {
				if (hr < 11) {
					return res.priceLists.breakfast;
				} else if (hr < 16) {
					return res.priceLists.lunch;
				} else {
					return res.priceLists.dinner;
				}
		})
		.catch(err => console.log("YOURE DOING SOMEHTING WRONG: ", err));
}; 
