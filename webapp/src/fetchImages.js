export const fetchImages = (endpoint, number) => {
		return fetch(`http://api.samescolas.me/${endpoint}/${number}`, {
			method: 'GET'
		})
		.then(response => {
			if (response.ok) {
				return response;
			} else {
				throw(Error(response.status));
			}
		})
		.then(response => {
			return response.json();
		})
		.catch(err => {
			return [];
		});
};
