import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleFilter } from '../../actions';
import styled from 'styled-components';
import { colors } from '../../config';

//import FaFilter from 'react-icons/lib/fa/filter';

class CategoryList extends Component {


	shouldComponentUpdate(nextProps, nextState) {
		return (
			this.props.appStatus.filterOpen === nextProps.appStatus.filterOpen &&
			this.props.appStatus.cartOpen === nextProps.appStatus.cartOpen
		);
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

	renderList = () => {
		const { menu, filter } = this.props;
		return ['All', ...Object.keys(menu.menuLists)].map(i => {
			let active = (filter === i || (i === 'All' && !filter));
			const Category = styled.li`
				cursor: pointer;
				width: 100%;
				height: 5vh;
				padding-top: 1.8vh;
				list-style-type: none;
				padding-left: 1.5vw;
				background-color: ${active ? colors.catsBgActive : colors.catsBg};
				text-shadow: ${active ? '0 0 1px white' : ''};
				transition: .5s;
				&:hover {
					background-color: ${colors.catsBgActive};
					text-shadow: 0 0 1px;
				};
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
			width: ${appStatus.filterOpen ? '15%' : '0'};
			height: 100vh;
			float: left;
			background-color: ${colors.catsBg};
			overflow: hidden;
			top: 7vh;
			position: fixed;
			display: flex;
			flex-direction: column;
			color: ${colors.catsFg};
			font-family: 'Droid serif', serif;
			box-shadow: 1px 1px 2px black;
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
			font-family: 'Oswald', sans-serif;
		`;

		if (!menu)
			return <Container />;
	
		return (
			<div>
				<Container id="category-list">
					<Title>{menu.labels.displayName}</Title>
					<CategoryList>
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
