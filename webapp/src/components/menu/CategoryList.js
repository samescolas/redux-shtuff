import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleFilter } from '../../actions';
import styled from 'styled-components';
import FaFilter from 'react-icons/lib/fa/filter';
import FaClose from 'react-icons/lib/fa/close';

class CategoryList extends Component {

	componentDidMount(e) {
		document.addEventListener('keydown', this.onKeypressWhenClosed);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return (
			this.props.appStatus.filterOpen === nextProps.appStatus.filterOpen &&
			this.props.appStatus.cartOpen === nextProps.appStatus.cartOpen
		);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.onKeypressWhenOpen);
		document.removeEventListener('keydown', this.onKeypressWhenClosed);
	}

	onKeypressWhenOpen = (e) => {
		const { filterMenu, menu, filter } = this.props;

		if (e.key === 'f') {
			this.closeList();
		} else if (e.key === 'ArrowDown') {
			let toFind = filter || 'All';
			let cats = ['All', ...Object.keys(menu.menuLists)];
			let ix = cats.indexOf(toFind);

			if (ix === cats.length - 1) {
				filterMenu(null);
				e.preventDefault();
				this.openList();
			} else if (ix >= 0) {
				filterMenu(cats[ix + 1])
				e.preventDefault();
				this.openList();
			}
		} else if (e.key === 'ArrowUp') {
			let toFind = filter || 'All';
			let cats = ['All', ...Object.keys(menu.menuLists)];
			let ix = cats.indexOf(toFind);

			if (ix === 0) {
				filterMenu(cats[cats.length - 1]);
				this.openList();
				e.preventDefault();
			} else if (ix === 1) {
				filterMenu(null);
				this.openList();
				e.preventDefault();
			} else if (ix >= 0) {
				filterMenu(cats[ix - 1])
				this.openList();
				e.preventDefault();
			}
		}
	}

	onKeypressWhenClosed = (e) => {
		if (e.key === 'f') {
			this.openList();
		}
	}

	onCategoryClick = (e) => {
		const { filterMenu } = this.props;

		if (e.target.innerHTML.toLowerCase() === 'all') {
			filterMenu(null);
			e.preventDefault();
		} else {
			filterMenu(e.target.innerHTML.toLowerCase());
			e.preventDefault();
		}
	};

	closeList = () => {
		let list = document.getElementById("category-list");
		let filter = document.getElementById("filter-container");
		let cart = document.getElementById("cart-container");

		if (list) {
			list.style.width = "0";
		}
		if (parseFloat(cart.offsetWidth) > 0) {
			document.getElementById("menu-container").style.width = "100%";
		}
		if (filter) {
			filter.style.color = "rgba(96, 10, 2, 1)";
		}
		document.removeEventListener('keydown', this.onKeypressWhenOpen);
		document.addEventListener('keydown', this.onKeypressWhenClosed);
		this.props.toggleFilter();
	};

	openList = () => {
		let list = document.getElementById("category-list");
		let filter = document.getElementById("filter-container");
		let cart = document.getElementById("cart-container");

		if (list) {
			list.style.width = "9%";
		}
		if (parseFloat(cart.offsetWidth) > 0) {
			let menuContainer = document.getElementById("menu-container");
				menuContainer.style.width = "80%";
		}
		if (filter) {
			filter.style.color = "rgba(96, 10, 2, 0)";
		}
		document.removeEventListener('keydown', this.onKeypressWhenClosed);
		document.addEventListener('keydown', this.onKeypressWhenOpen);
		this.props.toggleFilter();
	}

	renderList = () => {
		const { menu, filter } = this.props;
		return ['All', ...Object.keys(menu.menuLists)].map(i => {
			let active = (filter === i || (i === 'All' && !filter));
			const Category = styled.li`
				cursor: pointer;
				width: 100%;
				height: 5vh;
				padding-top: 2vh;
				list-style-type: none;
				padding-left: 1.5vw;
				background-color: ${active ? '#b20000' : null};
				font-weight: ${active ? 'bold' : null};
			`;

			return (
				<Category onClick={this.onCategoryClick} key={i}>
					{i === 'All' ? 'All' : menu.menuLists[i].labels.displayName}
				</Category>
			);
		});
	};

	render() {
		const { menu, appStatus } = this.props;
		const Container = styled.div`
			width: ${appStatus.filterOpen ? '9%' : '0'};
			height: 100vh;
			float: left;
			background-color: #600a02;
			overflow: hidden;
			top: 7vh;
			position: fixed;
			display: flex;
			flex-direction: column;
			color: #e2e2e2;
		`;
		const CategoryList = styled.ul`
			padding: 0;
			margin: 0;
			display: block;
			height: 75vh;
		`;
		const Title = styled.h3`
			width: 90%;
			height: 10%;
			padding-left: 1vw;
			font-size: 4vmin;
			float: left;
		`;
		const FilterContainer = styled.span`
			position: fixed;
			top: 8vh;
			font-size: 3vmin;
			padding: 0.5%;
			cursor: pointer;
			color: rgba(96, 10, 2, 1);
			z-index: 200;
		`;
		const CloseContainer = styled.span`
			font-size: 3vmin;
			cursor: pointer;
			display: block;
			text-align: right;
			padding-right: 1%;
		`;

		if (!menu)
			return <Container />;
	
		return (
			<div>
				<FilterContainer id="filter-container"><FaFilter onClick={(e) => { e.preventDefault(); this.openList(); }} /></FilterContainer>
				<Container id="category-list">
					<CloseContainer><FaClose onClick={this.closeList}/></CloseContainer>
					<Title>{menu.labels.displayName}</Title>
					<CategoryList>
						{/* Object.keys(menu.menuLists).map(i => <Category onClick={onCategoryClick} key={i}>{menu.menuLists[i].labels.displayName}</Category>) */}
						{ this.renderList() }
					</CategoryList>
				</Container>
			</div>
		);
	}
};

const mapStateToProps = ({ appStatus }) =>{
	return { appStatus };
};

export default connect(mapStateToProps, { toggleFilter })(CategoryList);
