import React from 'react';
import styled from 'styled-components';
import FaFilter from 'react-icons/lib/fa/filter';
import FaClose from 'react-icons/lib/fa/close';

const CategoryList = ({ menu, filter, filterMenu }) => {

	const Container = styled.div`
		width: 0;
		height: 100vh;
		float: left;
		background-color: #600a02;
		overflow: hidden;
		top: 13vh;
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
		padding-left: 2vw;
		font-size: 4vmin;
		float: left;
	`;
	const FilterContainer = styled.span`
		position: fixed;
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

	const onCategoryClick = (e) => {
		e.preventDefault();
		if (e.target.innerHTML.toLowerCase() === 'all') {
			filterMenu(null);
		} else {
			filterMenu(e.target.innerHTML.toLowerCase());
		}
	};

	const closeList = () => {
		let list = document.getElementById("category-list");
		let filter = document.getElementById("filter-container");

		if (list) {
			list.style.width = "0";
		}
		if (filter) {
			filter.style.color = "rgba(96, 10, 2, 1)";
		}
	};

	const openList = () => {
		let list = document.getElementById("category-list");
		let filter = document.getElementById("filter-container");

		if (list) {
			list.style.width = "17%";
		}
		if (filter) {
			filter.style.color = "rgba(96, 10, 2, 0)";
		}
	}

	const renderList = () => {
		return ['All', ...Object.keys(menu.menuLists)].map(i => {
			let active = (filter === i || (i === 'All' && !filter));
			const Category = styled.li`
				cursor: pointer;
				width: 100%;
				height: 5vh;
				padding-top: 2vh;
				list-style-type: none;
				padding-left: 2.5vw;
				background-color: ${active ? '#b20000' : null};
				font-weight: ${active ? 'bold' : null};
			`;

			return (
				<Category onClick={onCategoryClick} key={i}>
					{i === 'All' ? 'All' : menu.menuLists[i].labels.displayName}
				</Category>
			);
		});
	};

	if (!menu)
		return <Container />;

	return (
		<div>
			<FilterContainer id="filter-container"><FaFilter onClick={openList} /></FilterContainer>
			<Container id="category-list">
				<CloseContainer><FaClose onClick={closeList}/></CloseContainer>
				<Title>{menu.labels.displayName}</Title>
				<CategoryList>
					{/* Object.keys(menu.menuLists).map(i => <Category onClick={onCategoryClick} key={i}>{menu.menuLists[i].labels.displayName}</Category>) */}
					{ renderList() }
				</CategoryList>
			</Container>
		</div>
	);
};

export default CategoryList;
