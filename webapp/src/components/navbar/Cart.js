import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import ShoppingCart from 'react-icons/lib/fa/shopping-cart';


class Cart extends Component {

	componentDidMount() {
		document.addEventListener('keydown', this.onPressWhenClosed);
	}

	componentWillUnmount() {
		document.getElementById("main").removeEventListener('click', this.onLoseFocus);
		document.removeEventListener('keydown', this.onPressEscape);
	}


	closeNav = () => {
		let menuContainer = document.getElementById("menu-container");

		if (menuContainer) {
			menuContainer.style.width = "80%";
			menuContainer.style.marginRight = "0";
		}
		document.getElementById("cart-container").style.width = "0";
		document.getElementById("cart-btn").style.color = "#600a02";
		document.getElementById("main").removeEventListener('click', this.onLoseFocus);
		document.removeEventListener('keydown', this.onPressWhenOpen);
		document.addEventListener('keydown', this.onPressWhenClosed);
	}

	openNav = () => {
		let catList = document.getElementById("category-list");
		let sideNav = document.getElementById("cart-container");
		let menuContainer = document.getElementById("menu-container");

		if (sideNav) {
			sideNav.style.width = "300px";
		}
		if (menuContainer) {
			if (!catList.style.width || parseFloat(catList.style.width) <= 1) {
				menuContainer.style.width = "100%";
			}
			menuContainer.style.marginRight = "10%";
		}

		document.getElementById("main").addEventListener('click', this.onLoseFocus);
		document.getElementById("cart-btn").style.color = "white";
		document.removeEventListener('keydown', this.onPressWhenClosed);
		document.addEventListener('keydown', this.onPressWhenOpen);
	}

	onCloseClick = (e) => {
		e.preventDefault();
		this.closeNav();
	}

	onClick = (e) => {
		e.preventDefault();
		this.props.history.push(e.target.id.replace('Link', ''));
	}

	onLoseFocus = (e) => {
		this.closeNav();
	}

	onPressWhenOpen = ({ key }) => {
		if (key === 'Escape' || key === 'c') {
			this.closeNav();
		}
	}

	onPressWhenClosed = ({ key }) => {
		if (key === 'c') {
			this.openNav();
		}
	}

	toggleCart = () => {
		let cart = document.getElementById("cart-container");

		if (cart && parseFloat(cart.style.width) > 1) {
			this.closeNav();
		} else if (cart) {
			this.openNav();
		}
	}

	renderLink = (label, to) => {
		const	Link = styled.a`
			padding: 8px 8px 8px 32px;
			text-decoration: none;
			font-size: 25px;
			color: #818181;
			display: block;
			transition: 0.3s;
			&:hover {
				color: #f1f1f1;
			}
		`;

		return <Link key={to} id={`${to}Link`} href="" onClick={this.onClick}>{label}</Link>;
	}

	renderLinks = () => {
		const { user } = this.props;

		let userLinks;
		if (user != null) {
			userLinks = ['Profile', 'Sign Out'];
		} else {
			userLinks = ['Sign Up', 'Sign in'];
		}
		return ['Home', 'Menu', ...userLinks].map(l => {
			return this.renderLink(l, l.toLowerCase().replace(' ', ''));
		});
	}

	render() {
		const Container = styled.div`
			height: 87vh;
			width: 0;
			position: fixed;
			z-index: 17;
			top: 13vh;
			right: 0;
			background-color: #600a02;
			overflow-x: hidden;
			padding-top: 7vh;
			transition: 0.5s;
		`;
		const CloseButton = styled.a`
			position: absolute;
			top: 1vmin;
			right: 2vmin;
			font-size: 5vmin;
			text-decoration: none;
			color: #818181;
		`;
		const CartButton = styled.span`
			position: absolute;
			font-size: 4vmin;
			top: 4vh;
			right: 3vw;
			&:hover {
				cursor: pointer;
			}
			z-index: 42;
			color: #600a02;
			transition: color .4s;
		`;

		if (this.props.user === null)
			return null;
		return (
			<div>
				<CartButton id="cart-btn" onClick={this.toggleCart}><ShoppingCart /></CartButton>
				<Container id="cart-container">
					<CloseButton href="" onClick={(e) => { e.preventDefault(); this.closeNav(); }}>&times;</CloseButton>
					{ this.renderLinks() }
				</Container>
			</div>
		);
	}
};

export default withRouter(Cart);
