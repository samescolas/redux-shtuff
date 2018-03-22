import React, { Component } from 'react';
import Menu from './Menu';
import CategoryList from './CategoryList';
import { getMenu } from '../../requests';

class MenuContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menu: null,
			filtered: null
		};
	}

	componentDidMount() {
		getMenu()
		.then(menu => this.setState({ menu }));
	}

	filterMenu = (filtered) => {
		this.setState({ filtered });
	}

	render() {
		const { filtered, menu } = this.state;
		return (
			<div>
				<CategoryList menu={menu} filterMenu={this.filterMenu} />
				<Menu menu={filtered ? filtered : menu} />
			</div>
		)
	}
};

export default MenuContainer;
