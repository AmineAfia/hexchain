import * as React from "react";
import DataView from "../components/content/DataView";

export default class DataViewContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activePrice: 0
		};
		this.setActivePrice = this.setActivePrice.bind(this);
	}
	setActivePrice(value) {
		this.setState({ activePrice: value });
	}

	render() {
		return (
			<DataView
				setActivePrice={this.setActivePrice}
				activePrice={this.state.activePrice}
				prices={[2.3, 4, 7.5]}
			/>
		);
	}
}
