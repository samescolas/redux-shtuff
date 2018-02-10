import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import ReduxThunk from 'redux-thunk';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Signup from './components/Signup';
import Menu from './components/Menu';
import reducers from './reducers';
import './App.css';

class App extends Component {
	constructor (props) {
		super(props);
		this.state = {};
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		const Container = styled.div`
			width: 100vw;
		`;

		return (
			<BrowserRouter>
			  <Provider store={store}>
			  	<div>
					<NavBar />
					<Container>
						<Switch>
							<Route exact path="/" component={Welcome} />
							<Route path="/login" component={Login} />
							<Route path="/signup" component={Signup} />
							<Route path="/menu" component={Menu} />
						</Switch>
					</Container>
				</div>
			  </Provider>
			</BrowserRouter>
		);
	}
}

export default App;
