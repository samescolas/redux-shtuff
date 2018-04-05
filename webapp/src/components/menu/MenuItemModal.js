import React from 'react';
import styled from 'styled-components';
import OrderDetailForm from './OrderDetailForm';
import { colors } from '../../config';

const MenuItemModal = ({ isOpen, close, item, cart, addItem, removeItem }) => {
	if (!item)
		return null;
	const Container = styled.div`
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: ${isOpen ? colors.overlay : ''};
		display: ${isOpen ? 'block' : 'none'};
		bottom: 0;
		left: 0;
	`;
	const Overlay = styled.div`
		width: 100%;
		height: 67vh;
	`;
	const Content = styled.div`
		width: 100%;
		height: 33vh;
		background-color: ${colors.modalBg};
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		flex-direction: row;
		font-family: 'Ubuntu', 'Helvetica Neue', serif;
	`
	const Right = styled.div`
		width: 33%
		height: 33vh;
		display: flex;
		flex-direction: row;
		justify-content: center;
	`;
	const Center = styled.div`
		padding-top: 1vh;
		width: 33%
		height: 33vh;
		border-right: 1px solid rgba(0, 0, 0, 0.3);
		border-left: 1px solid rgba(0, 0, 0, 0.3);
	`;
	const Left = styled.div`
		width: 33%
		height: 33vh;
		padding-left: 1vw;
		padding-top: 1vh;
	`;
	const Image = styled.img`
		min-height: 15vw;
		max-height: 18vw;
		vertical-align: center;
		margin: auto;
		width: auto;
	`;
	const Title = styled.h2`
		font-family: 'Oswald', sans-serif;
		font-size: 4vmin;
		line-height: 1.2vmin;
	`;
	const CloseButton = styled.a`
		position: absolute;
		top: 1vh;
		right: 1vh;
		&:hover {
			cursor: pointer;
		};
	`;
	const onCloseClick = (e) => {
		e.preventDefault();
		close();
	};

	const itemCount = cart.items.filter(i => i === item).length;
	return (
		<Container id="menu-item-modal">
			<Overlay id="modal-overlay" />
			<Content>
				<Left>
					<CloseButton onClick={onCloseClick}>&times;</CloseButton>
					<Title>{item.labels.displayName}</Title>
					<p>{item.labels.description}</p>
				</Left>
				<Center>
					<OrderDetailForm
						item={item}
						itemCount={itemCount}
						addItem={addItem}
						removeItem={removeItem}
						closeDiv={close}
					/>
				</Center>
				<Right>
					{/* 
						We don't really want to replace any part of the url but it may be useful to 
						have a couple different size images readily available once we get there
					*/}
					<Image src={item ? item.imageURL.replace('200', '500') : ''} />
				</Right>
			</Content>
		</Container>
	);
};

export default MenuItemModal;
