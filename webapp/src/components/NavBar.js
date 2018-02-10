import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { addItem } from '../actions';
import { baseURL } from '../config';

class NavigationBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			signUser: {
				link: "signup",
				label: "Sign Up"
			}
		};

		this.toggleLink = this.toggleLink.bind(this);
	}

	componentDidMount() {
		document.addEventListener('scroll', () => {
			let nav = document.getElementsByClassName('navbar');

			nav[0].style.visibility = (window.scrollY - 40 < 0 ? 'visible' : 'hidden');
		});
	}

	componentWillUnmount() {
		document.removeEventListener('scroll');
	}

	toggleLink() {
		const { link, label } = this.state.signUser;
		
		if (link == 'signup') {
			this.setState({ signUser: { link: 'login', label: 'Login' } });
		} else {
			this.setState({ signUser: { link: 'signup', label: 'Sign Up' } });
		}
	}

	render() {
		const { cart, addItem } = this.props;
		const { link, label } = this.state.signUser;

		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
					<a href="#home">React-Bootstrap</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					<NavItem eventKey={1} href="#">
						Link
					</NavItem>
					<NavItem eventKey={2} href="#">
						Link
					</NavItem>
					<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
						<MenuItem eventKey={3.1}>Action</MenuItem>
						<MenuItem eventKey={3.2}>Another action</MenuItem>
						<MenuItem eventKey={3.3}>Something else here</MenuItem>
						<MenuItem divider />
						<MenuItem eventKey={3.4}>Separated link</MenuItem>
					</NavDropdown>
				</Nav>
			</Navbar>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	const { cart } = auth;

	return { cart };
};

export default connect(mapStateToProps, { addItem })(NavigationBar);
