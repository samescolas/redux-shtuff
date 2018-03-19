import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { auth } from '../../firebase';

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			pass1: '',
			pass2: '',
			errors: {}
		}
	}

	componentDidMount() {
		let email = document.getElementById("email");

		// redirect if alread logged in
		// maybe add a flash message later
		if (this.props.user != null) {
			this.props.history.push('home');
		}

		if (email){
			email.focus();
		}
	}

	onChangeText = (e) => {
		let newErrors = Object.assign({}, this.state.errors);
		delete newErrors[e.target.id];
		this.setState({ 
			[e.target.id]: e.target.value ,
			errors: newErrors
		});
	}

	createUser = (email, password) => {
		auth.createUserWithEmailAndPassword(this.state.email, this.state.pass1)
		.then((user) => { this.props.history.push('home') })
		.catch(err => {
			if (/already.*in.*use/.test(err.code)) {
				this.setState({ errors: { email: 'Email address alredy in use.' }});
			} else {
				this.setState({ errors: { pass2: 'Something went wrong. Please try again.' }});
			}
		})
	}

	onSubmit = (e) => {
		const { pass1, pass2, email } = this.state;
		let errors = {};

		e.preventDefault();
		if (!/\w+@\w+\.\w+/.test(email))
			errors['email'] = 'Please enter a valid email address.';
		if (pass1.length < 8 || !/[!-)]/.test(pass1))
			errors['pass1'] = 'Password must be greater than 8 characters and contain at least one symbol.';
		if (pass1.length > 22)
			errors['pass1'] = 'Password must be less than 22 characters.';
		if (pass1 !== pass2)
			errors['pass2'] = 'Passwords do not match';
		this.setState({ errors });
		if (Object.keys(errors).length === 0)
			this.createUser(email, pass1);
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
				<h2 style={TitleStyle}>Sign Up</h2>
				<form style={FormStyle}>
					<input style={InputStyle} id="email" type="email" placeholder="Email" value={this.state.email} onChange={(e) => this.onChangeText(e)} />
					<br />
					{ this.state.errors.email ? <ErrorMessage>{this.state.errors.email}</ErrorMessage> : null }
					<input style={InputStyle} id="pass1" type="password" placeholder="Password" value={this.state.pass1} onChange={(e) => this.onChangeText(e)} />
					<br />
					{ this.state.errors.pass1 ? <ErrorMessage>{this.state.errors.pass1}</ErrorMessage> : null }
					<input style={InputStyle} id="pass2" type="password" placeholder="Password again" value={this.state.pass2} onChange={(e) => this.onChangeText(e)} />
					<br />
					{ this.state.errors.pass2 ? <ErrorMessage>{this.state.errors.pass2}</ErrorMessage> : null }
					<input style={SubmitStyle} type="submit" onClick={(e) => this.onSubmit(e)} />
				</form>
			</div>
		);
	}
};

export default withRouter(Signup);
