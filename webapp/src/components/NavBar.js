import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';
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
		const Container = styled.div`
			width: 100%;
			height: 18vh;
		`;

		return (
			<Container>
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							<Link to={link} onClick={this.toggleLink}><Glyphicon glyph="user" /> {label}</Link>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullRight>
							<Link to="menu">Menu</Link>
							<NavItem eventKey={2} href="#">
								No Items
							</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	const { cart } = auth;

	return { cart };
};

export default connect(mapStateToProps, { addItem })(NavigationBar);
