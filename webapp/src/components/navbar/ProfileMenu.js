import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

class ProfileMenu extends Component {

	constructor(props) {
		super(props);
		this.state = {
			editing: false,
			name: props.user.displayName || 'unknown',
			email: props.user.email || 'unknown',
			phone: props.user.phoneNumber || 'unknown'
		}
	}

	toggleEditMode = (e) => {
		e.preventDefault();
		console.log("Setting editing to ", !this.state.editing, "...");
		this.setState({ editing: !this.state.editing });
	}

	displayValue = (attr) => {
		if (this.state.editing) {
			return <input type="text" onChange={t => this.setState({ [attr]: t.target.value })} value={this.state[attr]} />;
		}
		if (attr === 'name') {
			return <h2>{this.state[attr]}</h2>;
		}
		return <p>{this.state[attr]}</p>;
	}

	renderSettingsImage = () => {
		return null;
		/*

		This is something we maybe will add later but for the time being
		we will use a dedicated form/page for updating user information.

		const SettingsImage = styled.img`
			width: 4vmin;
			height: 4vmin;
			&:hover {
				cursor: pointer;
			}
		`;

		if (!this.state.editing) {
			return (
				<a onClick={(e) => this.toggleEditMode(e)}>
					<SettingsImage
						src="https://d30y9cdsu7xlg0.cloudfront.net/png/409892-200.png"
					/>
				</a>
			);
		}
		return null;
		*/
	}

	render() {
		const ContainerAnimation = keyframes`
			0% { width: 0vw; }
			100% { width: 20vw; }
		`;
		const fadeIn = keyframes`
			0% { opacity: 0;}
			100% { opacity: 1; }
		`;
		const Container = styled.div`
			height: 87vh;
			background-color: #e9e9e9;
			position: fixed;
			top: 13vh;
			right: 0;
			animation: ${ContainerAnimation} 0.5s ease-out;
			animation-fill-mode: forwards;
			z-index: 2;
		`;
		const ImageContainer = styled.div`
			margin-top: 5vh;
			width: 20vw;
			height: 12vh;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
		`;
		const Image = styled.img`
			width: 12vh;
			height: 12vh;
			border-radius: 50%;
			box-shadow: 0.2vmin 0.2vmin 0.4vmin;
		`;
		const TopSectionContainer = styled.div`
			margin: auto;
			width: 80%;
			height: 10vh;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			opacity: 0;
			animation: ${fadeIn} 0.7s ease-in 0.5s;
			animation-fill-mode: forwards;
		`;
		const DetailsContainer = styled.div`
			width: 100%;
			height: 62vh;
			background-color: indianred;
			padding-left: 1vw;
			padding-top: 1vh;
			margin-top: 3vh;
		`
		const { user } = this.props;

		return (
			<Container id="profileMenu">
				<TopSectionContainer>
					{user.emailVerified ? null : <button onClick={()=>console.log("verify")}>Verify!</button>}
					{this.renderSettingsImage()}
				</TopSectionContainer>
				<ImageContainer>
					<Image src={user.photoURL || "http://1.bp.blogspot.com/-Y-uUcAPaOR0/T7lu566UbVI/AAAAAAAACoM/bAyOO_0Nzww/s1600/anonymous+person.png"} />
				</ImageContainer>
				<DetailsContainer>
					<h2>Name:</h2>
					{this.displayValue('name')}
					<br />
					<p>Email:</p>
					{this.displayValue('email')}
					<br />
					<p>Phone:</p>
					{this.displayValue('phone')}
				</DetailsContainer>
			</Container>
		);
	}
}

export default ProfileMenu;
