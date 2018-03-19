import React, { Component } from 'react';
import styled from 'styled-components';
import ProfileMenu from './ProfileMenu';

class ProfileButton extends Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false
		}
	}
	
	renderProfileButton = () => {
		const ImageContainer = styled.div`
			width: 11vh;
			height: 13vh;
			float: right;
			display: flex;
			padding-right: 5vmin;
			align-items: center;
			justify-content: flex-end;
			flex-direction: row;
		`;
		const Image = styled.img`
			width: 6vh;
			height: 6vh;
			border-radius: 50%;
			&:hover {
				cursor: pointer;
			}
		`;
		return (
			<ImageContainer onClick={this.toggleOpen}>
				<Image src={this.props.user.photoURL || "http://1.bp.blogspot.com/-Y-uUcAPaOR0/T7lu566UbVI/AAAAAAAACoM/bAyOO_0Nzww/s1600/anonymous+person.png"} />
			</ImageContainer>
		);
	}

	toggleOpen = () => {
		this.setState({ open: !this.state.open });
	}

	renderProfileMenu = () => {
		if (this.state.open) {
			return <ProfileMenu user={this.props.user} />;
		}
		return null;
	}

	render() {
		return (
			<div>
				{this.renderProfileButton()}
				{this.renderProfileMenu()}
			</div>
		);
	}
}

export default ProfileButton;
