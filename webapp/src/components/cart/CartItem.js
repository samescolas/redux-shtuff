import React from 'react';
import styled from 'styled-components';

const CartItem = ({ item, empty, count }) => {
	if (empty) {
		const Title = styled.h2`
			margin-left: 2vw;
		`;

		return <Title>Your cart is empty.</Title>
	} else {
		const ItemContainer = styled.div`
			width: 99%;
			box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.42);
			height: 12vh;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		`
		const Image = styled.img`
			width: 33%;
			height: auto;
		`;
		const Label = styled.div`
			align-self: center;
		`;
		const Cost = styled.div`
		`;
		return (
			<ItemContainer>
				<Image src={item.imageURL} />
				<Label>
					<p>{item.labels.displayName}</p>
				</Label>
				<Cost>
					<p style={{ textAlign: 'right' }}>{"$" + parseFloat(item.price).toFixed(2).toString()}</p>
					<p style={{ textAlign: 'right' }}>x{count}</p>
					<p>{"$" + (item.price * count).toFixed(2).toString()}</p>
				</Cost>
			</ItemContainer>
		)
	}
};

export default CartItem;
