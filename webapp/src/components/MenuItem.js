import React, { Component } from 'react';
import styled from 'styled-components';
import { randomImage } from '../config';

class MenuItem extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { label, description, price } = this.props;
		const Item = styled.div`
			width: 50%;
			height: 30vh;
			border: 1px solid indianred;
			float: left;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
		`;
		const TextDiv = styled.div`
			text-align: left;
		`;
		const ImageDiv = styled.div`
			text-align: right;
			vertical-align: center;
		`;
		const Image = styled.img`
			width: 36vh;
			height: 30vh;
		`;

		return (
			<Item>
				<TextDiv>
					<h2>{label}</h2>
					<br />
					<p>{description}</p>
					<p>AVAILABLE LATER</p>
					<em>{price}</em>
				</TextDiv>
				<ImageDiv>
					<Image src={randomImage()} />
				</ImageDiv>
			</Item>
		);
	}
}

export default MenuItem; 
