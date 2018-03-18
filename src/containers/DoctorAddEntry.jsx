import React from "react";
import "antd/dist/antd.css";
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  List
} from "antd";
import { diseases, countries } from "../constants/mockup";
const FormItem = Form.Item;
import PatientProfile from "../components/content/PatientProfile";
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
      name: "",
      age: -1,
      nationality: "",
      city: "",
      country: "Netherlands",
      diseases: "",
      symptoms: [],
      agreement: false
    };
    this.inputOnChange = this.inputOnChange.bind(this);
    this.addSymptom = this.addSymptom.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  inputOnChange(event) {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { id } = target;

    this.setState({
      [id]: value
    });
  }

  addSymptom(event) {
    this.props.togglePatientOverlay();
    console.log(this.props);
    const { target } = event;
    const value = target.value;

    if (value) {
      let retval = this.state.symptoms;
      retval.push(value);
      this.setState({
        symptoms: retval
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.healthInstance
      .addPatient(
        this.state.name,
        this.state.age,
        this.state.nationality,
        this.state.city,
        this.state.country,
        { from: this.props.account, gas: 300000 }
      )
      .then(result => {
        console.log(result);
        this.props.healthInstance
          .addDiseaseToPatient(
            this.state.name,
            this.state.diseases,
            this.state.symptoms.join("  "),
            "Philip"
          )
          .then(result => {
            console.log("Added disease: ", this.state.diseases, result);
          });
      });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    console.log(this.props);
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "86"
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label="Name">
            {getFieldDecorator("name", {
              rules: [
                {
                  required: true,
                  message: "Please input patient name!",
                  whitespace: true
                }
              ]
            })(<Input onChange={this.inputOnChange} />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Age">
            {getFieldDecorator("age", {
              rules: [
                {
                  required: true,
                  message: "Please input patient age!",
                  placeholder: "Age",
                  whitespace: true
                }
              ]
            })(<Input onChange={this.inputOnChange} />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Nationality">
            {getFieldDecorator("nationality", {
              rules: [
                {
                  required: true,
                  message: "Please input patient nationality!",
                  placeholder: "Nationality",
                  whitespace: true
                }
              ]
            })(<Input onChange={this.inputOnChange} />)}
          </FormItem>
          <FormItem {...formItemLayout} label="City">
            {getFieldDecorator("city", {
              rules: [
                {
                  required: true,
                  message: "Please input the city of the patient!",
                  placeholder: "City",
                  whitespace: true
                }
              ]
            })(<Input onChange={this.inputOnChange} />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Country">
            {getFieldDecorator("country", {
              rules: [{ required: true, message: "Please input Country!" }]
            })(
              <AutoComplete
                dataSource={websiteOptions}
                onChange={this.handleWebsiteChange}
                placeholder="Country"
              >
                <Input onChange={this.inputOnChange} />
              </AutoComplete>
            )}
          </FormItem>
          <div className="disease">
            <FormItem {...formItemLayout} label="Disease">
              {getFieldDecorator("residence", {
                initialValue: ["infectious", "flue"],
                rules: [
                  {
                    type: "array",
                    required: true,
                    message: "Please select the patients diseas!"
                  }
                ]
              })(<Cascader options={diseases} />)}
            </FormItem>
            <div
              className="disease-symp"
              style={{
                display: "grid",
                gridAutoFlow: "column",
                marginLeft: "11%"
              }}
            >
              <FormItem {...formItemLayout} label="Symptom">
                {getFieldDecorator("symptom", {
                  rules: [
                    {
                      required: true,
                      message: "Add Symptom!",
                      placeholder: "Symptom",
                      whitespace: true
                    }
                  ]
                })(<Input onPressEnter={this.addSymptom} />)}
              </FormItem>
              <List
                bordered
                size="small"
                dataSource={this.state.symptoms}
                renderItem={item => (
                  <List.Item actions={[<a>delete</a>]}>{item}</List.Item>
                )}
              />
              <div className="symptoms" />
            </div>
          </div>
          <FormItem {...tailFormItemLayout}>
            {getFieldDecorator("agreement", {
              valuePropName: "checked"
            })(
              <Checkbox onChange={this.inputOnChange}>
                I have read the <a href="">agreement</a>
              </Checkbox>
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button
              disabled={!this.state.agreement}
              type="primary"
              htmlType="submit"
              onClick={this.addSymptom}
            >
              Register
            </Button>
          </FormItem>
        </Form>

        {this.props.showPatient ? (
          <PatientProfile
            onClose={this.props.togglePatientOverlay}
            patient={this.state}
          />
        ) : null}
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);
export default WrappedRegistrationForm;
