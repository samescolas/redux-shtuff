import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleCart } from '../../actions';
import styled from 'styled-components';
import ShoppingCart from 'react-icons/lib/fa/shopping-cart';
import Cart from './Cart';
import { colors, screens } from '../../config';


class CartContainer extends Component {

	componentDidMount() {
		document.addEventListener('keydown', this.onPressWhenClosed);
	}

	componentWillUnmount() {
		//document.getElementById("main").removeEventListener('click', this.onLoseFocus);
		document.removeEventListener('keydown', this.onPressEscape);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return (
			this.props.appStatus.filterOpen === nextProps.appStatus.filterOpen &&
			this.props.appStatus.cartOpen === nextProps.appStatus.cartOpen
		);
	}


	closeNav = () => {
		let menuContainer = document.getElementById("menu-container");

		if (menuContainer) {
			menuContainer.style.width = "80%";
			//menuContainer.style.marginRight = "0";
		}
		document.getElementById("cart-container").style.width = "0";
		document.getElementById("cart-btn").style.color = colors.cartBtn;
		//document.getElementById("main").removeEventListener('click', this.onLoseFocus);
		document.removeEventListener('keydown', this.onPressWhenOpen);
		document.addEventListener('keydown', this.onPressWhenClosed);
		this.props.toggleCart();
	}

	openNav = () => {
		let catList = document.getElementById("category-list");
		let sideNav = document.getElementById("cart-container");
		let menuContainer = document.getElementById("menu-container");

		if (sideNav) {
			sideNav.style.width = "400px";
		}
		if (menuContainer) {
			if (parseFloat(catList.offsetWidth) <= 1) {
				menuContainer.style.width = "100%";
			}
			//menuContainer.style.marginRight = "10%";
		}

		//document.getElementById("main").addEventListener('click', this.onLoseFocus);
		document.getElementById("cart-btn").style.color = colors.navBg;
		document.removeEventListener('keydown', this.onPressWhenClosed);
		document.addEventListener('keydown', this.onPressWhenOpen);
		this.props.toggleCart();
	}

	onCloseClick = (e) => {
		e.preventDefault();
		this.closeNav();
	}

	onClick = (e) => {
		e.preventDefault();
		this.props.history.push(e.target.id.replace('Link', ''));
	}

	/*
	onLoseFocus = (e) => {
		this.closeNav();
	}
	*/

	onPressWhenOpen = (e) => {
		if (e.target.type === undefined) {
			if (e.key === 'Escape' || e.key === 'c') {
				this.closeNav();
			}
		}
	}

	onPressWhenClosed = (e) => {
		if (e.target.type === undefined) {
			if (window.innerWidth > screens.tablet && e.key === 'c') {
				this.openNav();
			}
		}
	}

	toggleCart = () => {
		let cart = document.getElementById("cart-container");

		if (cart && parseFloat(cart.offsetWidth) > 1) {
			this.closeNav();
		} else if (cart) {
			this.openNav();
		}
	}

	render() {
		const Container = styled.div`
			height: 93vh;
			width: ${this.props.appStatus.cartOpen ? '400px' : '0'};
			position: fixed;
			z-index: 17;
			top: 7vh;
			right: 0;
			background-color: ${colors.cartBg};
			overflow-x: hidden;
			padding-top: 7vh;
			transition: 0.5s;
			box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.90);
		`;
		const CloseButton = styled.a`
			position: absolute;
			top: 1vmin;
			right: 2vmin;
			font-size: 3vmin;
			text-decoration: none;
			color: ${colors.cartFg};
			text-shadow: 1px 1px black;
			&:hover {
				text-decoration: underline;
			}
		`;
		const CartButton = styled.span`
			position: absolute;
			font-size: 3.2vmin;
			top: 1.6vh;
			right: 3vw;
			&:hover {
				cursor: pointer;
			}
			z-index: 42;
			color: ${this.props.appStatus.cartOpen ? colors.navBg : colors.cartBtn};
			transition: color .5s;
			@media (max-width: ${screens.tablet}px) {
				display: none;
			}
		`;

		if (this.props.user === null)
			return null;
		return (
			<div>
				<CartButton id="cart-btn" onClick={this.toggleCart}><ShoppingCart /></CartButton>
				<Container id="cart-container">
					<CloseButton href="" onClick={(e) => { e.preventDefault(); this.closeNav(); }}>&times;</CloseButton>
					<Cart cart={this.props.cart} toggleCart={this.toggleCart} />
				</Container>
			</div>
		);
	}
};

const mapStateToProps = ({ appStatus, cart }) => {
	return { appStatus, cart };
};

export default withRouter(connect(mapStateToProps, { toggleCart })(CartContainer));
