import React, { Component } from 'react';
import styled from 'styled-components';
import { randomImage } from '../config';

class MenuItem extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	shouldComponentUpdate(props, state) {
		console.log("PROPS: ", props);
		console.log("STATE: ", state);
	}

	render() {
		const { label, description, price, active, onMouseEnter, onMouseLeave, onClick } = this.props;
		const ItemWrapper = styled.div`
			width: 38vw;
			height: 24vh;
			border: 1px solid #e2e2e2;
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;
			margin-bottom: 1vh;
			margin-right: 2vw;
			cursor: pointer;
			overflow: hidden;
		`;
		const TextWrapper = styled.div`
			width: 60%;
			height: 100%;
			background-color: rgba(${active ? 203 : 253}, ${active ? 203 : 253}, ${active ? 203 : 253}, ${active ? 0.8 : 1});
			font-size: 1.8vmin;
			padding-left: 2vmin;
			padding-top: 2vmin;
		`;
		const ImageWrapper = styled.div`
			position: relative;
		`;
		const Overlay = styled.div`
			background-color: rgba(0, 17, 12, 0.6);
			width: 16vw;
			height: 24vw;
			text-align: center;
			padding-top: 12vh;
			position: absolute;
			z-index: 2;
			top: 0;
			visibility: ${active ? 'visible' : 'hidden'}
		`;
		const Image = styled.img`
			height: 24vh;
			width: 16vw;
		`;
		const OverlayText = styled.h4`
			color: rgba(241, 242, 247, 0.6);
			font-family: sans-serif;
			font-size: 2.5vmin;
		`;

		return (
			<ItemWrapper onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="item-wrapper">
					<TextWrapper className="text-wrapper">
						<h5>{label}</h5>
						<br />
						<p>{description}</p>
						<p>AVAILABLE LATER</p>
						<em>{price}</em>
					</TextWrapper>
					<ImageWrapper className="image-wrapper">
						<Image src={randomImage()} />
						<Overlay className="image-overlay">
							<OverlayText>Preview</OverlayText>
						</Overlay>
					</ImageWrapper>
			</ItemWrapper>
		);
	}
}

export default MenuItem; 
