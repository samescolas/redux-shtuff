import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { auth } from '../../firebase';
import { authorize_user } from '../../actions';

class UserContainer extends Component {

	componentDidMount() {
  	auth.onAuthStateChanged((user) => {
			if (user !== null) {
				console.log("How many times are we doing this? Not a lot, right?");
				this.props.authorize_user(user);
			} else {
				this.props.history.push('signin');
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

export default withRouter(connect(mapStateToProps, { authorize_user })(UserContainer));
