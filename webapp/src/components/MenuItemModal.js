import React, { Component } from 'react';
import { Modal, Button, ButtonGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addItem, removeItem } from '../actions';
import { loremIpsum, currencyFormat } from '../config';

class MenuItemModal extends Component {

	removeItem(item) {
		const { counts } = this.props.cart;

		if (counts[item.label] && counts[item.label] > 0)
			this.props.removeItem(item);
	}

	render() {
		const { item, show, closeModal, cart, addItem, removeItem } = this.props;
		const Image = styled.img`
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 0;
		`;
		if (item == null)
			return null;
		let quantity;
		if (cart.counts[item.label])
			quantity = cart.counts[item.label];
		else
			quantity = 0;
		return (
			<Modal
				show={show}
				onHide={() => closeModal()}
				keyboard={true}
			>
				<Modal.Header>
					<Image src={item.image} />
				</Modal.Header>
				<Modal.Body>
					<Modal.Title>{item.label}</Modal.Title>
					<p>{item.description}</p>
				</Modal.Body>
				<Modal.Footer>
					<div className="quantity">
						<div className="price">
							<h5>{currencyFormat(item.price * quantity)}</h5>
						</div>
						<ButtonGroup bsSize="small">
							<Button onClick={this.removeItem.bind(this, item)}>-</Button>
							<Button disabled={true}>Quantity: {quantity}</Button>
							<Button onClick={addItem.bind(this, item)}>+</Button>
						</ButtonGroup>
						<Button onClick={() => closeModal()}>Ok</Button>
					</div>
				</Modal.Footer>
			</Modal>
		);
	}
}

const mapStateToProps = ({ cart }) => {
	return { cart };
}

export default connect(mapStateToProps, { addItem, removeItem })(MenuItemModal); 
