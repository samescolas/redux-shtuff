import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { auth } from '../../firebase';

class Signin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			pass1: '',
			errors: {}
		}
	}

	componentDidMount() {
		let email = document.getElementById("email");
		
		if (this.props.user != null) {
			this.props.history.push('home');
		}

		if (email){
			email.focus();
		}
	}

	onChangeText = (e) => {
		this.setState({ 
			[e.target.id]: e.target.value ,
			errors: {}
		});
	}

	signInUser = (email, password) => {
		auth.signInWithEmailAndPassword(this.state.email, this.state.pass1)
		.then(this.props.history.push('home'))
		.catch(err => {
			this.setState({ errors: Object.assign(this.state.errors, { pass1: 'Invalid login credentials.' })});
		});
	}

	onSubmit = (e) => {
		const { pass1, email } = this.state;
		let errors = {};

		e.preventDefault();
		if (!/\w+@\w+\.\w+/.test(email))
			errors['email'] = 'Please enter a valid email address.';
		this.setState({ errors });
		if (Object.keys(errors).length === 0)
			this.signInUser(email, pass1);
	}

	render() {
		const ErrorMessage = styled.div`
			color: red;
			font-weight: bold;
		`;
		const ContainerStyle = {
			border: '0.7vmin solid darkred',
			backgroundColor: '#ffeeee',
			boxShadow: '1px 1px 10px #333',
			width: '37vw',
			height: '42vh',
			marginTop: '13vh',
			marginLeft: '31.5vw',
			padding: '0',
			display: 'flex',
			justifyContent: 'space-around',
			alignItems: 'center',
			flexDirection: 'column'
		};
		const FormStyle = {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-around',
			alignItems: 'center'
		};
		const InputStyle = {
			width: '23vw',
			height: '4vmin',
			borderRadius: '11px',
			paddingLeft: '2vmin',
			fontSize: '2vmin',
		};
		const SubmitStyle = {
			marginTop: '2vh',
		};
		const TitleStyle = {
			fontSize: '4.2vmin',
			color: '#733',
			textShadow: '1px 1px 2px #733'
		};
		return (
			<div style={ContainerStyle}>
				<h2 style={TitleStyle}>Sign In</h2>
				<form style={FormStyle}>
					<input style={InputStyle} id="email" type="email" placeholder="Email" value={this.state.email} onChange={(e) => this.onChangeText(e)} />
					<br />
					{ this.state.errors.email ? <ErrorMessage>{this.state.errors.email}</ErrorMessage> : null }
					<input style={InputStyle} id="pass1" type="password" placeholder="Password" value={this.state.pass1} onChange={(e) => this.onChangeText(e)} />
					<br />
					{ this.state.errors.pass1 ? <ErrorMessage>{this.state.errors.pass1}</ErrorMessage> : null }
					<input style={SubmitStyle} type="submit" value="Sign In" onClick={(e) => this.onSubmit(e)} />
				</form>
			</div>
		);
	}
};

export default withRouter(Signin);
