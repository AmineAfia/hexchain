import React from "react";
import { Form, Input, Button } from "antd";
import { Select } from "antd";
import "./OrgaSearchForm.scss";

const FormItem = Form.Item;
const Option = Select.Option;

class OrgaSearchForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			diseaseKeys: [],
			regionKeys: []
		};
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log("Received values of form: ", values);
			}
		});
	};
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form layout="vertical" className="orga-search-form">
				<FormItem id="disease-select">
					{getFieldDecorator("diseases", {
						rules: [{ validator: this.checkMention }]
					})(
						<Select mode="tags" placeholder="Diseases" tokenSeparators={[","]}>
							{this.state.diseaseKeys.map(k => <Option key={k}>{k}</Option>)}{" "}
						</Select>
					)}
				</FormItem>
				<FormItem id="region-select">
					{getFieldDecorator("regions", {
						rules: [{ validator: this.checkMention }]
					})(
						<Select mode="tags" tokenSeparators={[","]} placeholder="Regions">
							{this.state.regionKeys.map(k => <Option key={k}>{k}</Option>)}{" "}
						</Select>
					)}
				</FormItem>
				<FormItem wrapperCol={{ span: 14, offset: 6 }}>
					<Button
						type="primary"
						htmlType="submit"
						className="login-form-button"
					>
						Search
					</Button>
				</FormItem>
			</Form>
		);
	}
}

export default OrgaSearchForm;
