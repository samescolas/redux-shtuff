import React, { Component } from 'react';
import { fetchImages } from '../fetchImages';
import PortfolioImage from './PortfolioImage';

class Places extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images: [
						`https://picsum.photos/400/400/?image=${(Math.random()*80).toFixed(0)}`,
						`https://picsum.photos/400/400/?image=${(Math.random()*80).toFixed(0)}`,
						`https://picsum.photos/400/400/?image=${(Math.random()*80).toFixed(0)}`,
						`https://picsum.photos/400/400/?image=${(Math.random()*80).toFixed(0)}`,
						`https://picsum.photos/400/400/?image=${(Math.random()*80).toFixed(0)}`,
						`https://picsum.photos/400/400/?image=${(Math.random()*80).toFixed(0)}`,
						`https://picsum.photos/400/400/?image=${(Math.random()*80).toFixed(0)}`,
						`https://picsum.photos/400/400/?image=${(Math.random()*80).toFixed(0)}`,
						`https://picsum.photos/400/400/?image=${(Math.random()*80).toFixed(0)}`,
						`https://picsum.photos/400/400/?image=${(Math.random()*80).toFixed(0)}`,
						`https://picsum.photos/400/400/?image=${(Math.random()*80).toFixed(0)}`,
						`https://picsum.photos/400/400/?image=${(Math.random()*80).toFixed(0)}`,
						`https://picsum.photos/400/400/?image=${(Math.random()*80).toFixed(0)}`,
						`https://picsum.photos/400/400/?image=${(Math.random()*80).toFixed(0)}`,
						`https://picsum.photos/400/400/?image=${(Math.random()*80).toFixed(0)}`
			]
		}
	}
	componentDidMount() {
		//fetchImages('all', 20)
		//.then(response => {
			//this.setState({ images: response });
		//});
	}

	render() {
		return (
			<div className="container">
				<h1>Portraits</h1>
				{this.state.images.map(image => <PortfolioImage width={400} height={400} image={image} />)}
			</div>
		);
	}
}

export default Places;
