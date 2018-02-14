import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from 'react-bootstrap';
import styled from 'styled-components';
import MenuItem from './MenuItem';
import MenuItemModal from './MenuItemModal';
import menu from '../menu.json';
import { loremIpsum, randomImage } from '../config';

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: null,
			modal: null
		};
	}

	renderSection(section) {
		const ItemContainer = styled.div`
			flex: 1;
		`;

		return menu[section].map((item, ix) => {
			return (
				<ItemContainer key={ix}>
					<MenuItem
						active={this.state.active == item}
						onMouseEnter={this.onHover.bind(this, item)}
						onMouseLeave={this.onLeave.bind(this, item)}
						onClick={this.onClick.bind(this, { label: item, description: loremIpsum(255), price: (Math.random() * 10).toFixed(2)} )}
						label={item}
						description={loremIpsum(255)}
						price={'$' + (Math.random().toFixed(2)*10).toString() + '.' + Math.random().toFixed(2).toString()}
						image={randomImage()}
					/>
				</ItemContainer>
			);
		});
	}

	onClick(item) {
		this.setState({ modal: { ...item, image: randomImage() } });
	}

	onHover(item) {
		console.log("You're hovering over ", item, "!");
		this.setState({ active: item });
	}

	onLeave(item) {
		if (this.state.active == item) {
			this.setState({ active: null });
		}
	}

	closeModal() {
		this.setState({ modal: null });
	}

	render() {
		const PageContainer = styled.div`
			margin: 10vh;
		`;
		const MenuContainer = styled.div`
			display: flex;
			flex-direction: column;
		`;
		const SectionContainer = styled.div`
			display: flex;
			align-items: center;
			justify-content: center;
			/* You can set flex-wrap and
			  flex-direction individually */
			flex-direction: row;
			flex-wrap: wrap;
			/* Or do it all in one line
			 with flex flow */
			flex-flow: row wrap;
			/* tweak where items line
			  up on the row
			  valid values are: flex-start,
			  flex-end, space-between,
			  space-around, stretch */
			align-content: flex-end;
			margin-top: 4vh;
			margin-bottom: 6vh;
		`;

		return (
			<PageContainer>
				<MenuContainer>
						{ Object.keys(menu).map(section => {
							return (
								<div key={section}>
									<h2>{section}</h2>
									<SectionContainer>
										{this.renderSection(section)}
									</SectionContainer>
								</div>
							);
						}) }
				</MenuContainer>
				<MenuItemModal item={this.state.modal} show={this.state.modal != null} closeModal={this.closeModal.bind(this)} />
			</PageContainer>
		);
	}
}

export default Menu; 
