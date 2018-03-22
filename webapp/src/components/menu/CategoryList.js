import React from 'react';
import styled from 'styled-components';

const CategoryList = (props) => {

	const Container = styled.div`
		width: 17%;
		float: left;
		background-color: #600a02;
		height: 100vh;
		top: 13vh;
		position: fixed;
		color: #e2e2e2;
	`;
	const Category= styled.li`
		cursor: pointer;
	`;

	const { menu, filterMenu } = props;

	const onCategoryClick = (props, e) => {
		let newMenu = {
			labels: Object.assign({}, props.menu.labels),
			menuLists: [Object.assign({}, props.menu.menuLists[e.target.innerHTML.toLowerCase()])]
		};
		
		console.log(newMenu)
		props.filterMenu(newMenu);
	};

	if (props.menu) {
		console.log(props.menu)
	}

	if (!menu)
		return <Container />;
	return (
		<Container>
			<h3>{menu.labels.displayName}</h3>
			<ul>
				{ Object.keys(menu.menuLists).map(i => <Category onClick={(e) => onCategoryClick(props, e)} key={i}>{menu.menuLists[i].labels.displayName}</Category>)}
			</ul>
		</Container>
	);
};

export default CategoryList;
