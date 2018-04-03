import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import logo from '../../logo.png';

class Navbar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			currentPage: window.location.pathname.slice(1),
			profileMenu: false
		};
	}

	componentDidMount() {
		document.addEventListener('keydown', this.onKeypress);
	}

	componentWillUpdate(nextProps) {
		if (this.props.location.pathname !== nextProps.location.pathname) {
			this.setState({ currentPage: nextProps.location.pathname.slice(1) });
		}
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.onKeypress);
	}

	onKeypress = (e) => {
		if (e.target.type === undefined) {
			if (e.key === 'm') {
				this.props.history.push('menu');
				e.preventDefault();
			} else if (e.key === 'h') {
				this.props.history.push('/');
				e.preventDefault();
			} else if (e.key === 'p' && this.props.auth.isLoggedIn) {
				this.props.history.push('profile');
				e.preventDefault();
			} else if (!this.props.auth.isLoggedIn && e.key === 's' && window.location.pathname.slice(1) !== 'signup') {
				this.props.history.push('signup');
				e.preventDefault();
			} else if (!this.props.auth.isLoggedIn && e.key === 's') {
				this.props.history.push('signin');
				e.preventDefault();
			}
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
			height: 7vh;
			width: 22%;
			font-size: 2.2vmin;
			float: right;
			transition: background-color 0.42s ease-out, color 0.7s ease-out;
			background-color: ${active ? '#b20000' : '#f3f3f3'};
			color: ${active ? '#d2d2d2' : '#900000'};
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
		const { isLoggedIn } = this.props.auth;
		const NavListContainer = styled.div`
			height: 7vh;
			width: 50%;
			margin-right: 8vw;
			float: right;
			background-color: #f3f3f3;
		`;
		let userLink;	
		if (isLoggedIn) {
			userLink = 'Profile';
		} else if (this.state.currentPage === 'signup') {
			userLink = 'Sign In';
		} else {
			userLink = 'Sign Up';
		}

		return (
		  <NavListContainer>
				{!isLoggedIn  ? this.renderLink(userLink.toLowerCase().replace(' ', ''), userLink, 2) : null}
				{!isLoggedIn ? null : this.renderLink(userLink.toLowerCase().replace(' ', ''), userLink, 2)}
		  	{this.renderLink('menu', 'Menu', 1)}
		  </NavListContainer>
		);
	}

	render() {
		const NavContainer = styled.div`
			width: 100%;
			height: 7vh;
			background-color: #f3f3f3;
			font-family: 'Oswald', sans-serif;
			box-shadow: 2px 1px 2px #333;
			position: fixed;
			z-index: 17;
		`;
		const LogoContainer = styled.div`
			height: 7vh;
			width: 40%;
			float: left;
			padding-left: 5px;
		`;
		const Logo = styled.img`
			height: 100%;
			width: auto;
		`;
		const NavLink = styled.a`
			text-decoration: none;
		`;
		return (
		  <NavContainer>
			  <NavLink href="/" onClick={(e) => this.redirectTo('/', e)}>
					<LogoContainer>
						<Logo src={logo} />
					</LogoContainer>
			  </NavLink>
			  {this.renderLinks()}
		  </NavContainer>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	return { auth };
};

export default withRouter(connect(mapStateToProps, {})(Navbar));
