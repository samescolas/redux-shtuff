import { Component } from 'react';
// We use this to connect our component to the store or
// to dispatch actions via action creators like authorize_user
import { connect } from 'react-redux';

// We wrap the component in withRouter to make sure we pass route change
// info to component. (Connect blocks it.)
import { withRouter } from 'react-router-dom';
import { auth } from '../../firebase';
// Action creator used to dispatch an action to the store
import { authorize_user } from '../../actions';

class UserContainer extends Component {

	componentDidMount() {
  	auth.onAuthStateChanged((user) => {
			if (user !== null) {
				this.props.authorize_user(user);
				console.log("How many times are we doing this? Not a lot, right?");
			} else {
				this.props.history.push('signin');
				console.log("You've been signout out courtesy of the user container.");
			}
		});
	}
	
	render() {
		return this.props.children;
	}
};

export default withRouter(connect(null, { authorize_user })(UserContainer));
