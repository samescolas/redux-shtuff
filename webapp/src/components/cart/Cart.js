import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';

const Cart = (props) => {
	console.log("INSIDE CART:", props);
	const Container = styled.div`
		height: 90%;
		width: 100%;
		font-family: 'Droid serif', serif;
	`;
	const Title = styled.h3`
		font-size: 4vmin;
		font-family: 'Oswald', sans-serif;
		color: #111;
		text-shadow: 1px 1px black;
		padding-left: 1vw;
		position: fixed;
		top: 5vh;
	`;
	const ItemsContainer = styled.div`
		overflow-y: auto;
		margin-top: 2vh;
		background-color: #90000;
		padding: 2vh 0;
	`;
	const renderCartItems = (cart) => {
		if (cart.items.length == 0) {
			return <CartItem empty />;
		} else {
			let unqList = [...new Set(cart.items)];
			return unqList.map(i => <CartItem item={i} count={cart.items.filter(v => v === i).length} />);
		}
	};
	return (
		<Container>
			<Title>Cart</Title>
			<ItemsContainer>
				{renderCartItems(props.cart)}
			</ItemsContainer>
		</Container>
	);
};

export default Cart;
