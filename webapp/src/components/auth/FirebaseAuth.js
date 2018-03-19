import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase, { auth } from '../../firebase';

class FirebaseAuth extends Component {
	render() {
		const uiConfig = {
			signinFlow: 'popup',
			signinSuccessUrl: '/menu',
			signinOptions: [
				firebase.auth.GoogleAuthProvider.PROVIDER_ID,
				firebase.auth.FacebookAuthProvider.PROVIDER_ID,
				firebase.auth.TwitterAuthProvider.PROVIDER_ID,
				firebase.auth.GithubAuthProvider.PROVIDER_ID,
				firebase.auth.EmailAuthProvider.PROVIDER_ID,
				firebase.auth.PhoneAuthProvider.PROVIDER_ID
			]
		};
		const containerStyle = {
			paddingTop: '10vh'
		};

		return (
			<div style={containerStyle}>
				<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
			</div>
		);
	}
}

export default FirebaseAuth;
