import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Dropdown, Glyphicon, Button, FormGroup, FormControl } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addItem } from '../actions';
import menu from '../menu.json';
import { baseURL, currencyFormat } from '../config';

class NavigationBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			active: null
		};
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
		console.log(this.state);
		const link = /signup/.test(window.location.pathname) ? "login" : "signup";
		const label = /signup/.test(window.location.pathname) ? "Log In" : "Sign Up";

		return (
			<Navbar fixedTop={true}>
				<Navbar.Header>
					<Navbar.Brand>
						<LinkContainer to="/" onClick={() => this.setState({ active: null })}><a href="/">Tarboosh</a></LinkContainer>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					<LinkContainer to="/menu" onClick={() => this.setState({ active: 'menu' })}>
						<NavItem eventKey={1} active={this.state.active == 'menu'}>
							Menu
						</NavItem>
					</LinkContainer>
				</Nav>
				<Nav pullRight={true}>
					<LinkContainer to={link} onClick={() => this.setState({ active: link == "login" ? "signup" : "login" })}>
						<NavItem eventKey={3} active={link == "signup" ? this.state.active == "login" : this.state.active== "signup"}>
							{label}
						</NavItem>
					</LinkContainer>
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
									<MenuItem divider={true} />
									<div className="nav-cart-total">
										<LinkContainer to="cart"><Button type="success">Checkout</Button></LinkContainer>
									</div>
								</div>
								]
							:
								<div className="nav-cart-total">
									<p>Your cart is empty.</p>
								</div>
							}
						</Dropdown.Menu>
						<Dropdown id="filter-dropdown">
							<Dropdown.Toggle>
								<Glyphicon glyph="shopping-cart" />
							</Dropdown.Toggle>
							<Dropdown.Menu>
								{Object.keys(menu).map((key, ix) => <LinkContainer to={`/${key.toLowerCase()}`}><MenuItem eventKey={5+(ix+2/10)}>{key}</MenuItem></LinkContainer>)}
							</Dropdown.Menu>
						</Dropdown>
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
