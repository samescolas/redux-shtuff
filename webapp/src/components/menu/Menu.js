import React from 'react';
import styled from 'styled-components';
import Submenu from './Submenu';

const Menu = (props) => {
	const { menu, cart, openModal, closeModal, selectItem } = props;
	const MenuContainer = styled.div`
		width: ${props.appStatus.cartOpen ? (props.appStatus.filterOpen ? '80%' : '100%') : '80%'};
		float: right;
	`;
	const MenuList = styled.ul`
		list-style-type: none;
		margin: 0;
		marginRight: ${props.appStatus.cartOpen ? '15%' : '0'};
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
							<Submenu
								openModal={openModal}
								closeModal={closeModal}
								cart={cart}
								menu={menu.menuLists[m]}
								selectItem={selectItem}
							/>
						</MenuItem>
					);
				})}
			</MenuList>
		</MenuContainer>
	);
};

export default Menu;
