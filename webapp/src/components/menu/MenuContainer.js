import React, { Component } from 'react';
import Menu from './Menu';
import CategoryList from './CategoryList';
import { connect } from 'react-redux';
import { getMenu, filterMenu } from '../../actions';

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

	render() {
		const { menu } = this.props;

		if (this.state.loading) {
			return null;
		}
		return (
			<div>
				<CategoryList
					menu={menu.priceLists[menu.meal]}
					filter={menu.filter}
					filterMenu={this.filterMenu}
				/>
				<Menu menu={menu.filteredMenu || menu.priceLists[menu.meal]} />
			</div>
		)
	}
};

const mapStateToProps = ({ auth, menu }) => {
	return { auth, menu };
};

export default connect(mapStateToProps, { getMenu, filterMenu })(MenuContainer);
