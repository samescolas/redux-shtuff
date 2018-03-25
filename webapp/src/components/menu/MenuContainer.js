import React, { Component } from 'react';
import Menu from './Menu';
import CategoryList from './CategoryList';
import { connect } from 'react-redux';
import { getMenu, filterMenu, addItem } from '../../actions';

class MenuContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			error: null
		};
	}

	componentDidMount() {
		this.props.getMenu()
		.then(() => this.setState({ loading: false }))
		.catch(error => this.setState({ error }));
	}

	shouldComponentUpdate(nextProps, nextState) {
		return (
			this.props.appStatus.filterOpen === nextProps.appStatus.filterOpen &&
			this.props.appStatus.cartOpen === nextProps.appStatus.cartOpen
		);
	}

/*
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
	*/

	filterMenu = (filter) => {
		this.props.filterMenu(filter);
	}

	addItem = (item) => {

		console.log(item);
		this.props.addItem(item);
	}

	render() {
		const { menu, appStatus, cart } = this.props;
		
		if (this.state.loading) {
			return null;
		}
		return (
			<div>
				<CategoryList
					menu={menu.priceLists[menu.meal]}
					filter={appStatus.filter}
					filterMenu={this.filterMenu}
				/>
				<Menu
					appStatus={appStatus}
					menu={menu.filteredMenu || menu.priceLists[menu.meal]}
					addItem={this.addItem}
					cart={cart}
				/>
			</div>
		)
	}
};

const mapStateToProps = ({ auth, menu, appStatus, cart }) => {
	return { auth, menu, appStatus, cart };
};

export default connect(mapStateToProps, { getMenu, filterMenu, addItem })(MenuContainer);
