import React from 'react';
import styled from 'styled-components';

const MenuItem = (props) => {
	const Container = styled.div`
		width: 44%;
		margin-left: 5%;
		margin-bottom: 2%;
		box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.42);
		position: relative;
		@media (max-width: 1200px) {
			width: 100%;
			margin-left: 0;
		};
		&:nth-child(odd) {
			margin-left: 0;
		};
		&:hover {
			cursor: pointer;
		}
	`;
	const Image = styled.img`
		width: 45%;
		max-height: 220px;
		min-height: 120px;
		float: right;
	`;
	const TextSection = styled.div`
		padding: 0.5% 2%;
		width: 51%;
		float: left;
		font-family: 'Ubuntu', 'Helvetica Neue', serif;
	`;
	const Name = styled.p`
		font-weight: bold;
		font-size: 1.2em;
		line-height: 1em;
	`;
	const Description = styled.p`
		font-size: 1em;
	`;
	const Cost = styled.div`
		width: 100%;
		position: absolute;
		bottom: 0;
	`;
	const Price = styled.p`
	`
	const Order = styled.p`
	`;

	const onClick = (e) => {
		e.preventDefault();
		props.selectItem(props.item);
		console.log("ITEM SELECTED: ", props.item)
		props.openModal();
	};

	return (
			<Container onClick={onClick}>
				<TextSection>
					<Name>{props.item.labels.displayName}</Name>
					<Description>{props.item.labels.description}</Description>
					<Cost>
						<Price>{`${props.count > 0 ? `${props.count} x ` : ''}$${props.item.price.toString()}`}</Price>
					</Cost>
				</TextSection>
				<Image src={props.item.imageURL} />
			</Container>
	);
}

export default MenuItem;
