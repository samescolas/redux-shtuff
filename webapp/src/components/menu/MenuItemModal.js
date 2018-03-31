import React from 'react';
import styled from 'styled-components';

const MenuItemModal = ({ isOpen, close, item, cart, addItem, removeItem }) => {
	if (!item)
		return null;
	const Container = styled.div`
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: ${isOpen ? 'rgba(0, 0, 0, 0.5)' : ''};
		display: ${isOpen ? 'block' : 'none'};
		bottom: 0;
		left: 0;
	`;
	const Content = styled.div`
		width: 100%;
		height: 33vh;
		background-color: #fefefe;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		flex-direction: row;
	`
	const Left = styled.div`
		width: 39%
		height: 33vh;
	`;
	const Center = styled.div`
		width: 30%
		height: 33vh;
		border-right: 1px solid rgba(0, 0, 0, 0.3);
	`;
	const Right = styled.div`
		width: 30%
		height: 33vh;
		padding-left: 1vw;
		padding-top: 1vh;
	`;
	const Image = styled.img`
		height: 100%;
		width: auto;
	`;
	const CloseButton = styled.a`
		position: absolute;
		top: 1vh;
		right: 1vh;
		&:hover {
			cursor: pointer;
		};
	`;
	const FormContainer = styled.div`
		display: flex;
		flex-direction: row;
		margin-top: 10vh;
		justify-content: space-around;
		width: 80%;
		margin-left: 10%;
		height: 100%;
	`;
	const QuantityButton = styled.button`
		width: 13vmin;
		height: 8vmin;
		border-radius: 12%;
		font-size: 4vmin;
	`;
	const Quantity = styled.p`
		font-size: 3vmin;
		padding-left: 1vmin;
		padding-right: 1vmin;
	`;
	const Total = styled.p`
		font-size: 1.8vmin;
		position: fixed;
		bottom: 1vh;
		right: 2vw;
	`;
	const onCloseClick = (e) => {
		e.preventDefault();
		close();
	};
	const onPlusClick = (e) => {
		addItem(item);
	}
	const onMinusClick = (e) => {
		if (itemCount == 0)
			return ;
		removeItem(item);
	}
	const formatCurrency = (c) => {
		return "$" + c.toFixed(2).toString();
	};

	const itemCount = cart.items.filter(i => i === item).length;
	const totalPrice = itemCount * item.price;
	return (
		<Container id="menu-item-modal">
			<Content>
				<Left>
					{/* 
						We don't really want to replace any part of the url but it may be useful to 
						have a couple different size images readily available once we get there
					*/}
					<Image src={item ? item.imageURL.replace('200', '500') : ''} />
				</Left>
				<Center>
					<CloseButton onClick={onCloseClick}>&times;</CloseButton>
					<h2>{item.labels.displayName}</h2>
					<p>{item.labels.description}</p>
				</Center>
				<Right>
					<FormContainer>
						<QuantityButton onClick={onMinusClick}>-</QuantityButton>
						<Quantity>{itemCount}</Quantity>
						<QuantityButton onClick={onPlusClick}>+</QuantityButton>
						<Total>Total {formatCurrency(totalPrice)}</Total>
					</FormContainer>
				</Right>
			</Content>
		</Container>
	);
};

export default MenuItemModal;
