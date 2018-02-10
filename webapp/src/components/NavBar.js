import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Dropdown, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { addItem } from '../actions';
import { baseURL, currencyFormat } from '../config';

class NavigationBar extends Component {

	constructor(props) {
		super(props);
	}

	renderCartNav = ({ label, price }, key) => {
		const LeftText = styled.p`
			text-align: left;
		`;
		const RightText = styled.p`
			text-align: right;
		`;
		const CartItem = styled.div`
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		`;
		return (
			<MenuItem eventKey={key} >
				<CartItem>
					<LeftText>{label}</LeftText>
					<RightText>{currencyFormat(price)}</RightText>
				</CartItem>
			</MenuItem>
		)
	}

	render() {
		const { cart, addItem } = this.props;
		console.log(window.location);
		const link = /signup/.test(window.location.pathname) ? "login" : "signup";
		const label = /signup/.test(window.location.pathname) ? "Log In" : "Sign Up";

		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
					<Link to="/">Tarboosh</Link>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					<NavItem eventKey={1} href="menu" active={window.location.pathname == "/menu"}>
						Menu
					</NavItem>
					<NavDropdown eventKey={2} title="Dropdown" id="basic-nav-dropdown">
						<MenuItem eventKey={2.1}>Action</MenuItem>
						<MenuItem eventKey={2.2}>Another action</MenuItem>
						<MenuItem eventKey={2.3}>Something else here</MenuItem>
						<MenuItem divider />
						<MenuItem eventKey={2.4}>Separated link</MenuItem>
					</NavDropdown>
				</Nav>
				<Nav pullRight={true}>
					<NavItem eventKey={3} href={link}>
						{label}
					</NavItem>
					<Dropdown id="cart-dropdown">
						<Dropdown.Toggle>
							<Glyphicon glyph="shopping-cart" />
						</Dropdown.Toggle>
						<Dropdown.Menu>
							{cart.items.length > 0 ?
								cart.items.map((item, ix) => this.renderCartNav(item, 4 + (ix+2 / 10)))
							:
								<MenuItem eventKey={4.1}>Your cart is empty.</MenuItem>
							}
						</Dropdown.Menu>
					</Dropdown>
				</Nav>
			</Navbar>
		);
	}
}

const mapStateToProps = ({ cart }) => {
	return { cart };
};

export default connect(mapStateToProps, { addItem })(NavigationBar);
