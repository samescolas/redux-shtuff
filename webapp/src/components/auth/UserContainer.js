import { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../../firebase';
import { authorize_user } from '../../actions';

class UserContainer extends Component {

	componentDidMount() {
  	auth.onAuthStateChanged((user) => {
			if (user !== null) {
				this.props.authorize_user(user);
			}
		});
	}
	
	render() {
		console.log("inside usercontainer: ", this.props);
		return this.props.children;
	}
};

const mapStateToProps = ({ auth }) => {
	return auth;
};

export default connect(mapStateToProps, { authorize_user })(UserContainer);
