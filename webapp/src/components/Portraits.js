import React, { Component } from 'react';
import { fetchImages } from '../fetchImages';
import PortfolioImage from './PortfolioImage';

class Portraits extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images: [
						`https://picsum.photos/200/300/?image=${(Math.random()*80).toFixed(0)}`,
						`https://picsum.photos/200/300/?image=${(Math.random()*80).toFixed(0)}`,
						`https://picsum.photos/200/300/?image=${(Math.random()*80).toFixed(0)}`,
						`https://picsum.photos/200/300/?image=${(Math.random()*80).toFixed(0)}`,
						`https://picsum.photos/200/300/?image=${(Math.random()*80).toFixed(0)}`,
						`https://picsum.photos/200/300/?image=${(Math.random()*80).toFixed(0)}`,
						`https://picsum.photos/200/300/?image=${(Math.random()*80).toFixed(0)}`,
						`https://picsum.photos/200/300/?image=${(Math.random()*80).toFixed(0)}`,
						`https://picsum.photos/200/300/?image=${(Math.random()*80).toFixed(0)}`,
						`https://picsum.photos/200/300/?image=${(Math.random()*80).toFixed(0)}`
			]
		}
	}

	componentDidMount() {
		//fetchImages('portraits', 10)
		//.then(response => {
			//this.setState({ images: response });
		//});
	}

	render() {
		return (
			<div className="container">
				<h1>Portraits</h1>
				{this.state.images.map(image => <PortfolioImage image={image} width={200} height={200} />)}
			</div>
		);
	}
}

export default Portraits;
