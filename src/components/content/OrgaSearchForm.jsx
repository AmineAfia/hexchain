import React from "react";
import { Form, Input, Button } from "antd";
import { Layout } from "antd";
import "./OrgaSearchForm.scss";
import Select from "antd/lib/select";
const FormItem = Form.Item;
const Option = Select.Option;

class OrgaSearchForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			diseaseKeys: [],
			regionKeys: []
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit = (e, data) => {
		e.preventDefault();
		console.log(data);
		this.props.getRecords(data.diseases, data.regions);
		this.props.handleSubmit();
	};
	render() {
		const { getFieldDecorator, getFieldsValue } = this.props.form;
		let { regionKeys, diseaseKeys } = this.props;
		return (
			<Form
				layout="vertical"
				className="orga-search-form"
				onSubmit={e => this.handleSubmit(e, getFieldsValue())}
			>
				<FormItem id="disease-select">
					{getFieldDecorator("diseases", {})(
						<Select mode="tags" placeholder="Diseases" tokenSeparators={[","]}>
							{diseaseKeys.map(k => <Option key={k}>{k}</Option>)}
						</Select>
					)}
				</FormItem>
				<FormItem id="region-select">
					{getFieldDecorator("regions", {})(
						<Select mode="tags" tokenSeparators={[","]} placeholder="Regions">
							{regionKeys.map(k => <Option key={k}>{k}</Option>)}
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
