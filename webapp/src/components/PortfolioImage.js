import React, { Component } from 'react';
import styled from 'styled-components';

class PortfolioImage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { image, width, height } = this.props;
		const ImageContainer = styled.div`
			width: ${width+5}px;
			height: ${height+5}px;
			border: 1px solid #2e2e2e;
			background-color: #f2f2f2;
			float: left;
			display: flex;
			justify-content: center;
			align-items: center;
		`;
		const Image = styled.img`
			width: ${width}px;
			height: ${height}px;
		`;

		return (
			<ImageContainer className="imageContainer">
				<Image src={image} />
			</ImageContainer>
		);
	}
}

export default PortfolioImage;
