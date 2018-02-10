import React, { Component } from 'react';
import { Modal, Button, ButtonGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addItem, removeItem } from '../actions';
import { loremIpsum } from '../config';

class MenuItemModal extends Component {

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
						<ButtonGroup>
							<Button onClick={removeItem.bind(this, item)}>-</Button>
							<Button disabled={true}>Quantity: {quantity}</Button>
							<Button onClick={addItem.bind(this, item)}>+</Button>
						</ButtonGroup>
					</div>
					<Button onClick={() => closeModal()}>Ok</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

const mapStateToProps = ({ cart }) => {
	return { cart };
}

export default connect(mapStateToProps, { addItem, removeItem })(MenuItemModal); 
