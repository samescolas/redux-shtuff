import React from 'react';

const getMenu = (hr, menuList) => {
		if (hr < 6 || hr > 20) {
			return null;
		} else if (hr < 11) {
			return menuList.breakfast;
		} else if (hr < 16) {
			return menuList.lunch;
		} else {
			return menuList.dinner;
		}
};

const displayMenu = (menu) => {
	return (
		<div>
			<h2>{menu.labels.displayName}</h2>
		</div>
	);
};

const Menu = (props) => {
	if (props.menu == null) {
		return (
			<h1>Menu</h1>
		);
	} else {
		let hr = (new Date()).getHours();
		return displayMenu(getMenu(hr, props.menu.priceLists))
	}
};

export default Menu;
