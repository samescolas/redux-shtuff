import React, { Component } from 'react';
import styled from 'styled-components';

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
		const { label, description, image, price, active, onMouseEnter, onMouseLeave, onClick } = this.props;
		const ItemWrapper = styled.div`
			width: 40vw;
			height: 23vh;
			border-top: 0.02vmin solid #f2f2f2;
			border-left: 0.02vmin solid #f2f2f2;
			box-shadow: 1px 1px rgba(12, 17, 42, 0.2);
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;
			margin-bottom: 3vh;
			cursor: pointer;
			overflow: hidden;
		`;
		const TextWrapper = styled.div`
			width: 60%;
			height: 100%;
			background-color: rgba(244, 244, 244);
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
						<Image src={image} />
						<Overlay className="image-overlay">
							<OverlayText>Preview</OverlayText>
						</Overlay>
					</ImageWrapper>
			</ItemWrapper>
		);
	}
}

export default MenuItem; 
