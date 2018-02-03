import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../actions';
import { baseURL } from '../config';

class NavigationBar extends Component {

	render() {
		const { cart, addItem } = this.props;

		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to='login'><Glyphicon glyph="user" /> Log In</Link>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<NavItem eventKey={1} href="#">
							No Items
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	const { cart } = auth;

	return { cart };
};

export default connect(mapStateToProps, { addItem })(NavigationBar);
