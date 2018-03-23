import React from 'react';
import styled from 'styled-components';
import Submenu from './Submenu';

const Menu = (props) => {
	const { menu } = props;
	const MenuContainer = styled.div`
		width: 80%;
		float: right;
	`;
	const MenuList = styled.ul`
		list-style-type: none;
		margin: 0;
		padding: 0;
	`;
	const MenuItem = styled.li`
	`;

	if (menu == null) {
		return (
			<h1>Closed</h1>
		);
	}
	return (
		<MenuContainer id="menu-container">
			<MenuList>
				{Object.keys(menu.menuLists).map(m => {
					return (
						<MenuItem key={m}>
							<Submenu menu={menu.menuLists[m]} />
						</MenuItem>
					);
				})}
			</MenuList>
		</MenuContainer>
	);
};

export default Menu;
