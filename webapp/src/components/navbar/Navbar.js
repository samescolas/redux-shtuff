import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

class Navbar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			currentPage: window.location.pathname.slice(1),
			profileMenu: false
		};
	}

	componentWillUpdate(nextProps) {
		if (this.props.location.pathname !== nextProps.location.pathname) {
			this.setState({ currentPage: nextProps.location.pathname.slice(1) });
		}
	}

	redirectTo = (page, e) => {
		e.preventDefault();
		this.setState({ currentPage: page });
		this.props.history.push(page);
	}

	renderLink = (link, label, key) => {
		let active;
		if (this.state.currentPage === link) { 
			active = true;
		} else {
			active = false;
		}
		const NavItem = styled.div`
			height: 13vh;
			width: 22vmin;
			font-size: 3vmin;
			float: right;
			transition: background-color 0.42s ease-out, color 0.7s ease-out;
			background-color: ${active ? '#b20000' : '#900000'};
			color: ${active ? '#d2d2d2' : '#c3c3c3'};
			text-shadow: ${active ? '1px 1px 2px' : ''};
			&:hover {
				background-color: #b20000;
				color: #d2d2d2;
				text-shadow: 1px 1px 2px;
			}
		`;
		const NavLink = styled.a`
			color: gainsboro;
			text-decoration: none;
		`;
		const LinkText = styled.p`
			padding-top: 1.7vh;
			text-align: center;
		`;
		
		return (
			<NavLink key={key} href="/" onClick={(e) => this.redirectTo(link, e)}>
				<NavItem>
					<LinkText>{label}</LinkText>
				</NavItem>
			</NavLink>
		);
	}

	renderLinks = () => { 
		const { user } = this.props;
		const NavListContainer = styled.div`
			height: 13vh;
			width: 58vmin;
			margin-right: 8vmin;
			float: right;
			background-color: #900000;
		`;
		let userLink;	
		if (user != null) {
			userLink = 'Sign Out';
		} else if (this.state.currentPage === 'signup') {
			userLink = 'Sign In';
		} else {
			userLink = 'Sign Up';
		}

		  /*
		  <NavListContainer>
			{[userLink, 'Menu'].map((label, ix) => {
				let link = label.toLowerCase().replace(' ', '');

				return this.renderLink(link, label, ix)
			})}
		  </NavListContainer>
		  */
		return (
		  <NavListContainer>
			{user == null ? this.renderLink(userLink.toLowerCase().replace(' ', ''), userLink, 2) : null}
			{user == null ? null : this.renderLink(userLink.toLowerCase().replace(' ', ''), userLink, 2)}
		  	{this.renderLink('menu', 'Menu', 1)}
		  </NavListContainer>
		);
	}

	render() {
		const NavContainer = styled.div`
			width: 100vw;
			height: 13vh;
			background-color: #900000;
			font-family: 'Spectral SC', serif;
			box-shadow: 2px 1px 5px black;
		`;
		const NavLogo = styled.h2`
			color: #c9c9c9;
			font-size: 4.2vmin;
			text-shadow: 1px 2px 2px #2e2e2e;
			padding-left: 2vw;
		`;
		const LogoContainer = styled.div`
			height: 13vh;
			width: 33vmin;
			float: left;
		`;
		const NavLink = styled.a`
			text-decoration: none;
		`;
		const Emphasis = styled.span`
			color: #ff1712;
			font-weight: boldest;
			font-size: 4.3vmin;
			text-shadow: 3px 3px 4px #660033;
		`;
		return (
		  <NavContainer>
			  <NavLink href="/" onClick={(e) => this.redirectTo('/', e)}>
				<LogoContainer>
					<NavLogo>Food<Emphasis>Fighters</Emphasis></NavLogo>
				</LogoContainer>
			  </NavLink>
			  {this.renderLinks()}
		  </NavContainer>
		);
	}
}

export default withRouter(Navbar);
