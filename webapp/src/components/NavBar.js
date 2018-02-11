import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Dropdown, Glyphicon, Button, FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { addItem } from '../actions';
import { baseURL, currencyFormat } from '../config';

class NavigationBar extends Component {

	constructor(props) {
		super(props);
	}

	renderCartNav = (label, key) => {
		const { counts, items } = this.props.cart;
		const item = items[items.findIndex(i => i.label == label)];
		const { price } = item;
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
					<LeftText>{`${label} x ${counts[label]}`}</LeftText>
					<RightText>{currencyFormat(parseFloat(price)*counts[label])}</RightText>
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
			<Navbar fixedTop={true}>
				<Navbar.Header>
					<Navbar.Brand>
					<a href="/">Tarboosh</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					<NavItem eventKey={1} href="menu" active={window.location.pathname == "/menu"}>
						Menu
					</NavItem>
				</Nav>
				<Nav pullRight={true}>
					<NavItem eventKey={3} href={link} active={link == "signup" ? window.location.pathname == "/login" : window.location.pathname == "/signup"}>
						{label}
					</NavItem>
					<Dropdown id="cart-dropdown">
						<Dropdown.Toggle>
							<Glyphicon glyph="shopping-cart" />
						</Dropdown.Toggle>
						<Dropdown.Menu>
							{cart.items.length > 0 ?
								[Object.keys(cart.counts).map((key, ix) => this.renderCartNav(key, 4 + (ix+2 / 10))),
								<div>
									<MenuItem divider={true} />
									<div className="nav-cart-total">
										<p>Total</p>
										<p>{currencyFormat(cart.items.map(item => parseFloat(item.price)).reduce((a, sum) => a+sum, 0))}</p>
									</div>
								</div>
								]
							:
								<div className="nav-cart-total">
									<p>Your cart is empty.</p>
								</div>
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
