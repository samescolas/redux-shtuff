import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import CartItem from './CartItem';
import { colors } from '../../config';

const Cart = (props) => {
	const Container = styled.div`
		height: 90%;
		width: 100%;
		font-family: 'Droid serif', serif;
	`;
	const Title = styled.h3`
		font-size: 4vmin;
		font-family: 'Oswald', sans-serif;
		color: ${colors.cartFg};
		text-shadow: 1px 1px black;
		padding-left: 1vw;
		position: fixed;
		top: 5vh;
	`;
	const ItemsContainer = styled.div`
		overflow-y: auto;
		margin-top: 2vh;
		background-color: ${colors.cartBg};
		padding: 2vh 0;
	`;
	const CheckoutButtonSpan = styled.span`
		cursor: pointer;
		display: inline-block;
		position: relative;
		transition: 0.5s;
		&:after {
			content: '\00bb';
			position: absolute;
			opacity: 0;
			right: -50px;
			top: -2px;
			transition: 0.5s;
			font-size: 1.2em;
		}
	`
	const CheckoutButton = styled.button`
		width: 80%;
		margin-left: 10%;
		height: 80px;
		border-radius: 12px;
		background-color: #008CBA;
		display: inline-block;
		cursor: pointer;
		color: #f2f2f2;
		font-size: 1.7em;
		font-family: 'Ubuntu', 'Helvetica Neue', sans-serif;
		transition: 0.5s;
		&:hover {
			padding-right: 55px;
		}
		&:hover ${CheckoutButtonSpan}:after {
			opacity: 1;
			right: -25px;
		}
	`;
	const renderCartItems = (cart) => {
		if (cart.items.length === 0) {
			return <CartItem empty />;
		} else {
			let unqList = [...new Set(cart.items)];
			return unqList.map(i => <CartItem item={i} count={cart.items.filter(v => v === i).length} />);
		}
	};
	const checkout = (e) => {
		e.preventDefault();

		props.toggleCart();
		props.history.push('checkout');
	}
	const renderCheckoutButton = (empty) => {
		if (!empty) {
			return <CheckoutButton onClick={checkout}><CheckoutButtonSpan>Checkout</CheckoutButtonSpan></CheckoutButton>;
		}
		return null;
	}
	return (
		<Container>
			<Title>Cart</Title>
			<ItemsContainer>
				{renderCartItems(props.cart)}
			</ItemsContainer>
			{renderCheckoutButton(props.cart.items.length === 0)}
		</Container>
	);
};

export default withRouter(Cart);
