import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { auth } from '../../firebase';

class Signout extends Component {
	
	componentWillMount() {
		auth.signOut()
		.then(this.props.history.push('signin'))
		.catch(err => console.log("Something went wrong: ", err))
	}
	
	render() {
		return null;
	}
};

export default withRouter(Signout);
