import React from "react";
import { Form, Layout, Collapse } from "antd";
import OrgaSearchForm from "../components/content/OrgaSearchForm";
import Redirect from "react-router-dom/Redirect";

const { Panel } = Collapse;

export default class OrgaSearchFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    console.log("wat");
    this.setState({ redirect: true });
  }
  render() {
    const TheForm = Form.create()(OrgaSearchForm);
    if (this.state.redirect) {
      return <Redirect to="/orgadata" />;
    }
    return (
      <div className="orgaSearch">
        <div className="orgaSearch-header">
          <a href="localhost:8080/">
            <img
              style={{
                height: "73px",
                marginRight: "26px",
                display: "inline-block",
                cursor: "pointer"
              }}
              src="../../img/icon.png"
            />
          </a>
          <div style={{ display: "inline-block" }}>Organization</div>
        </div>
        <div className="orgaSearch-container">
          <Collapse
            accordion
            defaultActiveKey={["1"]}
            style={{ width: "600px" }}
          >
            <Panel header="Data Search" key="1">
              <TheForm
                regionKeys={["USA"]}
                diseaseKeys={["Cancer"]}
                handleSubmit={this.handleSubmit}
                getRecords={this.props.getRecords}
              />
            </Panel>
          </Collapse>
        </div>
      </div>
    );
  }
}
