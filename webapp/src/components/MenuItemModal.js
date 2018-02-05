import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';
import { loremIpsum } from '../config';

const MenuItemModal = ({ item, show, closeModal }) => {

	if (!item) {
		item = {
			label: 'Item',
			price: '$2.22',
			description: loremIpsum(120)
		};
	}

	console.log("Inside render modal: ", item);

	return (
		<Modal show={show} onHide={() => closeModal()}>
			<h2>Htes</h2>
		</Modal>
	);
}

export default MenuItemModal; 
