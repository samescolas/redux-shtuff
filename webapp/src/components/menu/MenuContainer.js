import React, { Component } from 'react';
import Menu from './Menu';
import { getMenu } from '../../requests';

class MenuContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menu: null
		};
	}

	componentDidMount() {
		getMenu()
		.then(menu => this.setState({ menu }));
	}

	render() {
		return <Menu menu={this.state.menu} />;
	}
};

export default MenuContainer;
