import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

class Sidenav extends Component {
	closeNav = () => {
		document.getElementById("sidenav").style.width = "0";
		document.getElementById("sandwich-btn").style.display = "block";
		document.getElementById("main").removeEventListener('click', this.onLoseFocus);
		document.removeEventListener('keydown', this.onPressEscape);
	}

	openNav = () => {
		document.getElementById("sidenav").style.width = "300px";
		document.getElementById("sandwich-btn").style.display = "none";
		document.getElementById("main").addEventListener('click', this.onLoseFocus);
		document.addEventListener('keydown', this.onPressEscape);
	}

	onCloseClick = (e) => {
		e.preventDefault();
		this.closeNav();
	}

	onClick = (e) => {
		e.preventDefault();
		this.props.history.push(e.target.id.replace('Link', ''));
	}

	componentWillUnmount() {
		document.getElementById("main").removeEventListener('click', this.onLoseFocus);
		document.removeEventListener('keydown', this.onPressEscape);
	}

	onLoseFocus = (e) => {
		console.log(e);
		this.closeNav();
	}

	onPressEscape = ({ key }) => {
		if (key === 'Escape') {
			this.closeNav();
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
		const Sidenav = styled.div`
			height: 100%;
			width: 0;
			position: fixed;
			z-index: 1;
			top: 0;
			right: 0;
			background-color: #111;
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
		const Sandwich = styled.span`
			position: absolute;
			font-size: 4vmin;
			top: 4vh;
			right: 3vw;
			&:hover {
				cursor: pointer;
			}
		`;
		return (
			<div>
				<Sandwich id="sandwich-btn" onClick={this.openNav}>&#9776;</Sandwich>
				<Sidenav id="sidenav">
					<CloseButton href="" onClick={this.onCloseClick}>&times;</CloseButton>
					{ this.renderLinks() }
				</Sidenav>
			</div>
		);
	}
};

export default withRouter(Sidenav);
