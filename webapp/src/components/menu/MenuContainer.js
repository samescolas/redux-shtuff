import React, { Component } from 'react';
import Menu from './Menu';
import { connect } from 'react-redux';
import {
	getMenu,
	filterMenu,
	addItem,
	removeItem,
	toggleMenuItemModal,
	selectMenuItem,
} from '../../actions';

import CategoryList from './CategoryList';
import MenuItemModal from './MenuItemModal';

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

	componentWillUnmount() {
		document.removeEventListener('keydown', this.onModalKeyPress);
		document.removeEventListener('click', this.onModalClick);
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
		this.props.addItem(item);
	}

	removeItem = (item) => {
		this.props.removeItem(item);
	}

	openModal = () => {
		let modal = document.getElementById("menu-item-modal");
		this.props.toggleMenuItemModal();
		

		document.addEventListener('keydown', this.onModalKeyPress)
		document.addEventListener('click', this.onModalClick);
		if (modal) {
			modal.style.display = "block";
			console.log("GOT 'EM");
		} else {
			console.log("NO CAN DO");
			console.log(modal);
		}
	};

	closeModal = () => {
		this.props.toggleMenuItemModal();
		let modal = document.getElementById("menu-item-modal");
		
		modal.style.display = "none";
		document.removeEventListener('keydown', this.onModalKeyPress)
		document.removeEventListener('click', this.onModalClick);
	};

	onModalKeyPress = (e) => {
		if (e.key == 'Escape') {
			this.closeModal();
		}
	}

	onModalClick = (e) => {
		if (e.target.id === 'modal-overlay') {
			this.closeModal();
		}
	}

	render() {
		const { menu, appStatus, cart, selectMenuItem } = this.props;
		
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
					cart={cart}
					openModal={this.openModal}
					selectItem={selectMenuItem}
				/>
				<MenuItemModal
					isOpen={appStatus.menuItemModalOpen}
					close={this.closeModal}
					item={menu.selected}
					cart={cart}
					addItem={this.addItem}
					removeItem={this.removeItem}
				/>
			</div>
		)
	}
};

const mapStateToProps = ({ auth, menu, appStatus, cart }) => {
	return { auth, menu, appStatus, cart };
};

export default connect(mapStateToProps, { getMenu, filterMenu, addItem, toggleMenuItemModal, selectMenuItem, removeItem })(MenuContainer);
