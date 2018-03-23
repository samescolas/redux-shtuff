import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { auth } from './firebase';

import Navbar from './components/navbar/Navbar';
import Cart from './components/navbar/Cart';
import MenuContainer from './components/menu/MenuContainer';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';
import Home from './components/Home';

import FirebaseAuth from './components/auth/FirebaseAuth';

import './App.css';

class App extends Component {
  constructor(props) {
  	super(props);
		this.state = {
			user: null
		};
  }

  componentDidMount() {
  	auth.onAuthStateChanged((user) => {
			this.setState({ user });
		});
  }

  renderRouteWithUser = (C, path, exact=false) => {
  	if (exact)
			return <Route exact path={path} component={() => <C user={this.state.user} />} />;
		else
			return <Route path={path} component={() => <C user={this.state.user} />} />;
  }

  render() {
    return (
				<BrowserRouter>
					<div>
						<Cart user={this.state.user} />
						<div id="main">
							<Navbar user={this.state.user} />
							{ /* Add padding to account for fixed position navbar */}
							<div style={{ paddingTop: '13vh' }}>
								<Switch>
									{ /* This is super ugly and needs to be fixed */ }
									{this.renderRouteWithUser(Home, '/', true)}
									{this.renderRouteWithUser(Home, '/home')}
									{this.renderRouteWithUser(MenuContainer, '/menu')}
									{this.renderRouteWithUser(Signup, '/signup')}
									{this.renderRouteWithUser(Signin, '/signin')}
									{this.renderRouteWithUser(Signout, '/signout')}
									<Route path='/fuckoff' component={FirebaseAuth} />
								</Switch>
							</div>
						</div>
					</div>
				</BrowserRouter>
    );
  }
}

export default App;
