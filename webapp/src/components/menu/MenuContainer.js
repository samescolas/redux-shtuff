import React, { Component } from 'react';
import Menu from './Menu';
import CategoryList from './CategoryList';
import { getMenu } from '../../requests';

class MenuContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menu: null,
			filteredMenu: null,
			filter: null
		};
	}

	componentDidMount() {
		getMenu()
		.then(menu => this.setState({ menu }));
	}

	filterMenu = (filter) => {
		if (filter === null) {
			this.setState({ filter: null, filteredMenu: null });
		} else {
			this.setState({
				filter,
				filteredMenu: {
					labels: { ...this.state.menu.labels },
					menuLists: [ {...this.state.menu.menuLists[filter] }]
				}
			});
		}
	}

	render() {
		const { filteredMenu, menu } = this.state;
		return (
			<div>
				<CategoryList
					menu={menu}
					filter={this.state.filter}
					filterMenu={this.filterMenu}
				/>
				<Menu menu={filteredMenu ? filteredMenu : menu} />
			</div>
		)
	}
};

export default MenuContainer;
