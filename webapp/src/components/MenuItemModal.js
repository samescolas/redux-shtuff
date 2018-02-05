import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { loremIpsum } from '../config';

const MenuItemModal = ({ item, show, closeModal }) => {

	const Container = styled.div`
		z-index: 3;
	`;

	if (!item) {
		item = {
			label: 'Item',
			price: '$2.22',
			description: loremIpsum(120)
		};
	}

	console.log("Inside render modal: ", item);

	return (
		<Container>
			<Modal show={show} onHide={closeModal}>
				<Modal.Header closeButton>
					<Modal.Title>{item.label}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>{item.description}</p>
					<p><em>{item.price}</em></p>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={closeModal}>Close</Button>
				</Modal.Footer>
			</Modal>
		</Container>
	);
}

export default MenuItemModal; 
