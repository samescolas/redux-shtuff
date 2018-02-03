import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from 'react-bootstrap';
import menu from '../menu.json';

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	renderSection(section) {
		return menu[section].map(item => <Link to={`menu/${section}/${item}`}>{item}</Link>);
	}

	render() {
		return (
			<div>
				<PageHeader>Menu</PageHeader>
				{ Object.keys(menu).map(section => <li key={section}>{this.renderSection(section)}</li>) }
			</div>
		);
	}
}

export default Menu; 
