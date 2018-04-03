import React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';

const Submenu = ({ menu, cart, openModal, closeModal, selectItem }) => {
	const SectionContainer = styled.div`
		margin-top: 10px;
		padding: 2vmin 0;
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
		display: flex;
		flex-wrap: wrap;
		margin-left: 10%;
		@media (max-width: 1200px) {
			margin-left: 0;
			width: 90%;
		};
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
						<MenuItem
							count={count(i)}
							key={i.itemId}
							item={i}
							openModal={openModal}
							closeModal={closeModal}
							selectItem={selectItem}
						/>
					);
				})}
			</MenuItemContainer>
		</SectionContainer>
	)
};

export default Submenu;
