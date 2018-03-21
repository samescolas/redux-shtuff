import React from 'react';
import styled from 'styled-components';
import Submenu from './Submenu';

const Menu = (props) => {
	const { menu } = props;
	const MenuContainer = styled.div`
		width: 80%;
		float: right;
	`;
	const Title = styled.h1`
		font-size: 5vmin;
		text-align: center;
		color: #333;
	`;
	const Subtitle = styled.h3`
		font-size: 2em;
		text-align: center;
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
		<MenuContainer>
			<Title>{menu.labels.displayName}</Title>
			<Subtitle>{menu.labels.description}</Subtitle>
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
