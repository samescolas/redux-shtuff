import React from 'react';

const displaySubmenu = (menu) => {
	return (
		<div>
			<h2>{menu.labels.displayName}</h2>
			<p>{menu.labels.description}</p>
			{menu.items.map(i => {
				return (
					<div key={i.itemId}>
						<h5>{i.labels.displayName}</h5>
						<h6>{i.labels.description}</h6>
					</div>
				);
			})}
		</div>
	)
};

const displayMenu = (menu) => {
	return (
		<div>
			<h1>{menu.labels.displayName}</h1>
			<h3>{menu.labels.description}</h3>
			<ul>
				{Object.keys(menu.menuLists).map(m => <li key={m}>{displaySubmenu(menu.menuLists[m])}</li>)}
			</ul>
		</div>
	);
};

const Menu = (props) => {
	if (props.menu == null) {
		return (
			<h1>Closed</h1>
		);
	} else {
		return displayMenu(props.menu);
	}
};

export default Menu;
