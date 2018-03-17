import * as React from "react";
import { Card, Icon, Layout } from "antd";

import "./DataView.scss";

const { Header, Content } = Layout;

const gridHeaderStyle = {
	width: "100%",
	textAlign: "center"
};
const gridPriceStyle = {
	width: "33%",
	textAlign: "center"
};
const gridPriceStyleActive = {
	width: "33%",
	textAlign: "center",
	color: "#1890ff",
	border: "1px solid #1890ff"
};

export default class DataView extends React.PureComponent {
	render() {
		let { activePrice, setActivePrice } = this.props;
		return (
			<Layout>
				<Header />
				<Content>
					<div className="data-view-container">
						<Card
							title={this.props.term + " Data"}
							actions={[
								<span>
									Purchase{" "}
									<Icon type="login" onClick={this.props.handlePurchase} />
								</span>
							]}
						>
							<Card.Grid style={gridHeaderStyle}>
								{this.props.number} Records Available
							</Card.Grid>
							<Card.Grid
								onClick={() => setActivePrice(0)}
								style={activePrice == 0 ? gridPriceStyleActive : gridPriceStyle}
							>
								Demographic Data
							</Card.Grid>
							<Card.Grid
								onClick={() => setActivePrice(1)}
								style={activePrice == 1 ? gridPriceStyleActive : gridPriceStyle}
							>
								{this.props.price} Relavent Data
							</Card.Grid>
							<Card.Grid
								onClick={() => setActivePrice(2)}
								style={activePrice == 2 ? gridPriceStyleActive : gridPriceStyle}
							>
								Complete Data
							</Card.Grid>
						</Card>
					</div>
				</Content>
			</Layout>
		);
	}
}
