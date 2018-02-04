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
			float: left;
			display: flex;
			flex-direction: row;
		`;
		const Image = styled.img`
			width: 17vmin;
			height: 17vmin;
		`;

		return (
			<Item>
				<div>
					<h4>{label}</h4>
					<br />
					<p>{description}</p>
					<p>AVAILABLE LATER</p>
					<em>{price}</em>
				</div>
				<div>
					<Image src={randomImage()} width="100px" height="100px" />
				</div>
			</Item>
		);
	}
}

export default MenuItem; 
