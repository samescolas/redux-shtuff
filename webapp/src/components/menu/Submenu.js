import React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';

const Submenu = ({ menu, addItem, cart }) => {
	const SectionContainer = styled.div`
		margin-top: 10px;
		padding: 2vmin;
	`
	const TitleContainer = styled.div`
		width: 100%;
		display: block;
	`;
	const Title = styled.h3`
		text-align: center;
	`;
	const Subtitle = styled.h5`
		text-align: center;
		text-decoration: italic;
	`;
	const MenuItemContainer = styled.div`
		width: 80%;
		margin-left: 5%;
		padding-left: 10%;
		padding-bottom: 2%;
		display: flex;
		flex-wrap: wrap;
	`;
	const count = (item) => {
		return cart.items.filter(i => i === item).length;
	}
	return (
		<SectionContainer>
			<TitleContainer>
				<Title>{menu.labels.displayName}</Title>
				<Subtitle><em>{menu.labels.description}</em></Subtitle>
			</TitleContainer>
			<MenuItemContainer>
				{menu.items.map(i => {
					return (
						<MenuItem count={count(i)} addItem={addItem} key={i.itemId} item={i} />
					);
				})}
			</MenuItemContainer>
		</SectionContainer>
	)
};

export default Submenu;
