import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { login } from '../actions';
import {
	FormGroup,
	FormControl,
	ControlLabel,
	HelpBlock,
	Button,
	PageHeader
} from 'react-bootstrap';

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.id]: e.target.value });
	}

	emailValidation() {
		const { email } = this.state;
		const format = /^[-a-z0-9_+.]+@([-a-z0-9_+.])+\.[a-z0-9]{2,63}$/i;

		if (format.test(email))
			return 'success';
		return 'error';
	}

	render() {
		const { email, password } = this.state;
		const { login } = this.props;
		const InputContainer = styled.div`
			display: flex;
			justify-content: center;
			align-items: center;
		`;
		const FormContainer = styled.div`
			padding-left: 4vw;
			margin-top: 20vh;
			margin-left: 12.5vw;
			width: 50vw;
			height: 45vh;
			background-color: rgba(220, 217, 220, 0.6);
			border: 1px solid #e2e2e2;
		`;

		return (
			<FormContainer>
				<PageHeader>Sign Up</PageHeader>
				<InputContainer>
					<form>
						<FormGroup
							validationState={this.emailValidation()}
						>
							<ControlLabel>Email</ControlLabel>
							<FormControl
								id="email"
								type="email"
								value={email}
								placeholder="example@domain.com"
								onChange={this.handleChange}
							/>
							<FormControl.Feedback />
						</FormGroup>
						<Button onClick={login.bind(this, email, password)}>Sign Up</Button>
					</form>
				</InputContainer>
			</FormContainer>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	const { email } = auth;

	return { email };
};

export default connect(null, { login })(Signup); 
