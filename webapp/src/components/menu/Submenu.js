import React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';

const Submenu = ({ menu, cart, openModal, closeModal, selectItem }) => {
	const SectionContainer = styled.div`
		margin-top: 10px;
		padding: 2% 0;
		transition: height .5s;
	`
	const TitleContainer = styled.div`
		display: block;
		width: 80%;
		margin-left: 10%;
		@media (max-width: 1200px) {
			margin-left: 0;
		}
		font-size: 2em;
	`;
	const Title = styled.h3`
		width: 80%;
		float: left;
		font-family: 'Oswald';
	`;
	const ShowButton = styled.p`
		width: 12%;
		float: right;
		text-align: right;
		font-size: 120%;
		padding-right: 8%;
		cursor: pointer;
		@media (max-width: 1200px) {
			width: 20%;
			padding-right: 0%;
		}
		&:hover {
			text-shadow: 0 1px black;
			font-weight: bold;
		}
		display: none;
	`;
	const HideButton = styled.p`
		width: 12%;
		float: right;
		text-align: right;
		font-size: 120%;
		padding-right: 8%;
		cursor: pointer;
		@media (max-width: 1200px) {
			width: 20%;
			padding-right: 0%;
		}
		&:hover {
			text-shadow: 0 1px black;
			font-weight: bold;
		}
	`;
	const Subtitle = styled.h5`
		text-decoration: italic;
		font-size: 0.7em;
		width: 100%;
		clear: both;
	`;
	const MenuItemContainer = styled.div`
		width: 80%;
		padding: 1% 0;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		margin-left: 10%;
		transition: height 0.5s;
		@media (max-width: 1200px) {
			margin-left: 0;
			width: 90%;
		};
	`;
	const count = (item) => {
		return cart.items.filter(i => i === item).length;
	}

	const hideSection = (e, sectionName) => {
		let section = document.getElementById(sectionName);

		if (section) {
			// Hide section items
			let items = section.getElementsByClassName("menu-section-items");
			if (items.length > 0) {
				items[0].style.height = "0";
				items[0].style.padding = "0";
				items[0].style.overflow = "hidden";
			}

			// Hide minus sign
			let hideButton = section.getElementsByClassName("hide-menu-section");
			if (hideButton.length > 0) {
				hideButton[0].style.display = "none";
			}

			// Show plus sign
			let showButton = section.getElementsByClassName("show-menu-section");
			if (showButton.length > 0) {
				showButton[0].style.display = "block";
			}

			// Hide subtitle
			let subtitle = section.getElementsByClassName("menu-section-subtitle");
			if (subtitle.length > 0) {
				subtitle[0].style.display = "none";
			}

			section.style.height = "80px";
		}
	};

	const showSection = (e, sectionName) => {
		let section = document.getElementById(sectionName);

		if (section) {
			// Hide section items
			let items = section.getElementsByClassName("menu-section-items");
			if (items.length > 0) {
				items[0].style.height = "100%";
				items[0].style.padding = "1% 0";
				items[0].style.overflow = "flex";
			}

			// Hide minus sign
			let hideButton = section.getElementsByClassName("hide-menu-section");
			if (hideButton.length > 0) {
				hideButton[0].style.display = "block";
			}

			// Show plus sign
			let showButton = section.getElementsByClassName("show-menu-section");
			if (showButton.length > 0) {
				showButton[0].style.display = "none";
			}

			// Hide subtitle
			let subtitle = section.getElementsByClassName("menu-section-subtitle");
			if (subtitle.length > 0) {
				subtitle[0].style.display = "block";
			}

			section.style.height = "";
		}
	};

	return (
		<SectionContainer id={menu.labels.displayName}>
			<TitleContainer>
				<Title className="menu-section-title">{menu.labels.displayName}</Title>
				<HideButton className="hide-menu-section" onClick={(e) => hideSection(e, menu.labels.displayName)}>&minus;</HideButton>
				<ShowButton className="show-menu-section" onClick={(e) => showSection(e, menu.labels.displayName)}>+</ShowButton>
				<Subtitle className="menu-section-subtitle"><em>{menu.labels.description}</em></Subtitle>
			</TitleContainer>
			<MenuItemContainer className="menu-section-items">
				{menu.items.map(i => {
					return (
						<MenuItem
							count={count(i)}
							key={i.itemId}
							item={i}
							openModal={openModal}
							closeModal={closeModal}
							selectItem={selectItem}
						/>
					);
				})}
			</MenuItemContainer>
		</SectionContainer>
	)
};

export default Submenu;
