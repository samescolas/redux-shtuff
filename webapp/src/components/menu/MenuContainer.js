import React, { Component } from 'react';
import Menu from './Menu';

class MenuContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menu: null
		};
	}

	componentDidMount() {
		const hr = (new Date()).getHours();

		fetch('https://restaurant-44353.firebaseio.com/menu.json')
			.then(res => res.json())
			.then(res => {
				if (hr < 11) {
					this.setState({ menu: res.priceLists.breakfast });
				} else if (hr < 16) {
					this.setState({ menu: res.priceLists.lunch });
				} else {
					this.setSTate({ menu: res.priceLists.dinner });
				}
			})
			.catch(err => console.log("Uh oh, something went wrong: ", err));
	}

	render() {
		return <Menu menu={this.state.menu} />;
	}
};

export default MenuContainer;
