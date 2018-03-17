import * as React from "react";
import { Card, Icon, Layout } from "antd";

import "./DataView.scss";

const { Header, Content } = Layout;

const gridStyle = {
	width: "33%",
	textAlign: "center"
};

export default class DataView extends React.PureComponent {
	render() {
		return (
			<Layout>
				<div className="data-view-container">
					<Header />
					<Content>
						<Card
							title={this.props.term + " Data"}
							actions={[
								<Icon type="login" onClick={this.props.handlePurchase} />
							]}
						>
							<Card.Grid style={gridStyle}>
								{this.props.number} Records Available
							</Card.Grid>
							<Card.Grid style={gridStyle}>
								{this.props.price} Price Per Record
							</Card.Grid>
							<Card.Grid style={gridStyle}> Full Comprehensive Data </Card.Grid>
						</Card>
					</Content>
				</div>
			</Layout>
		);
	}
}
