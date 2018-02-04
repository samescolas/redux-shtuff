import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from 'react-bootstrap';
import styled from 'styled-components';
import MenuItem from './MenuItem';
import menu from '../menu.json';
import { loremIpsum } from '../config';

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	renderSection(section) {
		return menu[section].map(item => <MenuItem label={item} description={loremIpsum(50)} price={'23.00'} />);
	}

	render() {
		const Menu = styled.div`
			margin-top: 20vh;
		`;

		return (
			<Menu>
				<PageHeader>Menu</PageHeader>
				<ul>
					{ Object.keys(menu).map(section => <div style={{ width: '100%' }}><li key={section}><h3>{section}</h3><ul>{this.renderSection(section)}</ul></li></div>) }
				</ul>
			</Menu>
		);
	}
}

export default Menu; 
