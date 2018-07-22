import React from 'react';
import { withRouter } from 'react-router';

const Home = (props) => {
	return (
		<div id="home-container" className="App">
			<img id="home-img" src="falafel_combo.jpeg" />
			<button onClick={() => props.history.push('menu')}>Order now!</button>
		</div>
	);
};

export default withRouter(Home);
