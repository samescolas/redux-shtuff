import React from 'react';
import styled from 'styled-components';

const MenuItem = (props) => {
	const Container = styled.div`
		width: 40%;
		height: 17vh;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.42);
		@media (max-width: 1200px) {
			width: 80%;
			margin-left: 0;
		};
		margin-left: 5%;
		margin-top: 2%;
		&:nth-child(odd) {
			margin-left: 0;
		};
		&:hover {
			cursor: pointer;
		}
		position: relative;
	`;
	const TextSection = styled.div`
		width: 65%;
		margin-left: 5%;
		height: 100%;
		font-size: 1.9vmin;
	`;
	const Image = styled.img`
		width: 30%;
		height: 100%;
	`;
	const Name = styled.p`
		font-weight: bold;
		font-size: 2.1vmin;
		padding-top: 3px;
	`;
	const Description = styled.p`
		margin-right: 5%;
	`;
	const Price = styled.p`
		text-align: right;
		padding-right: 5%;
		position: absolute;
		bottom: 0;
		right: 31%;
	`
	const Order = styled.p`
		text-align: left;
	`;

	const onClick = (e) => {
		e.preventDefault();
		props.selectItem(props.item);
		props.openModal();
		//setTimeout(props.openModal, 200);
	};

	return (
			<Container onClick={onClick}>
				<TextSection>
					<Name>{props.item.labels.displayName}</Name>
					<Description>{props.item.labels.description}</Description>
					<Price>{props.item.price.toString()}</Price>
					<Order>{props.count}</Order>
				</TextSection>
				<Image src={props.item.imageURL} />
			</Container>
	);
}

export default MenuItem;
