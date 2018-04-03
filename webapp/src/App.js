import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

/*
	createStore lets us create one central location for our state
	applyMiddleware will be useful later on..
*/
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';

import { auth } from './firebase';

import UserContainer from './components/auth/UserContainer';

import Navbar from './components/navbar/Navbar';
import CartContainer from './components/cart/CartContainer';
import MenuContainer from './components/menu/MenuContainer';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';
import Home from './components/Home';
import Profile from './components/Profile';

import reducers from './reducers';

import FirebaseAuth from './components/auth/FirebaseAuth';

import './App.css';

const App = () => {
	const store = createStore(reducers, {}, applyMiddleware(thunk));

	return (
			<BrowserRouter>
				<Provider store={store}>
						<UserContainer>
						<CartContainer user={{}} />
						<div id="main">
							<Navbar user={{}} />
							{ /* Add padding to account for fixed position navbar */}
							<div style={{ paddingTop: '13vh' }}>
								<Switch>
									<Route path='/profile' component={Profile} />
								</Switch>
								<Switch>
									<Route path='/home' component={Home} />
									<Route path='/menu' component={MenuContainer} />
									<Route path='/signin' component={FirebaseAuth} />
									<Route path='/signup' component={FirebaseAuth} />
									<Route path='/signout' component={Signout} />
								</Switch>
							</div>
						</div>
						</UserContainer>
				</Provider>
			</BrowserRouter>
	);
}

export default App;
