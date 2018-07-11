import React, { Component } from 'react';
import styled from 'styled-components';
import firebase from '../../firebase';
import config from '../../config';
// import { colors, screens } from '../../config';

class NewPaymentSource extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cc: {
				no: '',
				expMo: 1,
				expYr: 2017,
				cvc: '',
				zip: '',
			}
		};
	}

	addPaymentSource = (e) => {
		e.preventDefault();
		console.log(this.props);
		/*
		Stripe.card.createToken({
			number: this.state.cc.no,
			cvc: this.state.cc.cvc,
			exp_month: this.state.cc.expMo,
			exp_year: this.state.cc.expYr,
			address_zip: this.state.cc.zip
		}, (status, response) => {
			if (response.error) {
				this.state.error = response.error.message;
			} else {
				firebase.database().ref(`/stripe_customers/${this.currentUser.uid}/sources`).push({token: response.id}).then(() => {
					this.setState({ cc: {
						no: '',
						cvc: '',
						expMo: 1,
						expYr: 2017,
						zip: ''
					}});
				});
			}
		});
		*/
	}

	onChange = (e) => this.setState({ cc: { ...this.state.cc, [e.target.id]: e.target.value }});

	render() {
		return (
			<form onSubmit={this.addPaymentSource}>
				CC<input id="no" type="text" value={this.state.cc.no} onChange={this.onChange} />
				<br />
				Expiration Month<input id="expMo" type="text" value={this.state.cc.expMo} onChange={this.onChange} />
				Expiration Year<input id="expYr" type="text" value={this.state.cc.expYr} onChange={this.onChange} />
				<br />
				CVC<input type="text" id="cvc" value={this.state.cc.cvc} onChange={this.onChange} />
				<br />
				Zip<input type="text" id="zip" value={this.state.cc.zip} onChange={this.onChange} />
				<br />
				<input type="submit" onClick={this.addPaymentSource} value="Add Credit Card" />
			</form>
		)
	}

}

export default NewPaymentSource;
