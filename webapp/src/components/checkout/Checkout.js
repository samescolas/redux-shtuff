import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { colors } from '../../config';
import './Checkout.css';


class Checkout extends Component {

	render() {

		if (!this.props.auth.user || this.props.auth.user.isAnonymous)
			return <div><h1>ANONYMOUS</h1></div>;
		if (!this.props.auth.isLoggedIn) {
			return (
				<div>
					<h4>Credit Card, please?</h4>
					<form>
						<input type="email" /><br />
						CC: <input type="text" /><br />
						<input type="submit" value="Ok" />
					</form>
					<p></p>
				</div>
			);
		} else {
			return (
				<div>
					<div id="checkout-container">
						<div>{JSON.stringify(this.props.cart)}</div>
					</div>
				</div>
			);
		}
	}
};

const mapStateToProps = ({ appStatus, auth, cart }) => {
	return { appStatus, auth, cart };
};

export default withRouter(connect(mapStateToProps, null)(Checkout));
