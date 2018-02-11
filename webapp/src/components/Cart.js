import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import styled from 'styled-components';
import MenuItem from './MenuItem';
import { randomImage } from '../config';

class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	renderCart = (cart) => {
		if (cart.length <= 0)
			return <p>Cart empty.</p>;
		return cart.map(item => {
			return (
				<ListGroupItem>
					<MenuItem
						label={item.label}
						description={item.description}
						price={item.price}
						image={randomImage()}
					/>
				</ListGroupItem>
			);
		});
	}

	render() {
		const Page = styled.div`
			margin-top: 13vh;
		`;
		const Cart = styled.div`
			padding: 1vmin;
			border: 0.04vmin solid black;
			width: 80vw;
			min-height: 60vh;
			margin 10vh auto;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
		`;
		const cart = this.renderCart(this.props.cart.items);
		return (
			<Page>
				<h1>Cart</h1>
				<Cart>
					<ListGroup>
						{cart}
					</ListGroup>
				</Cart>
			</Page>
		);
	}
}

const mapStateToProps = ({ cart }) => {
	return { cart };
};

export default connect(mapStateToProps, {})(Cart); 
