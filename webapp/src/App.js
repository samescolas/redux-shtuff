import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import thunk from 'redux-thunk';				// middleware to allow async actions

// Components
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Signup from './components/Signup';
import Menu from './components/Menu';
import Cart from './components/Cart';

import reducers from './reducers';				// reducers

import './App.css';

const App = () => {
	const store = createStore(reducers, {}, applyMiddleware(thunk));
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
						<Route path="/cart" component={Cart} />
					</Switch>
				</Container>
			</div>
		  </Provider>
		</BrowserRouter>
	);
}

export default App;
