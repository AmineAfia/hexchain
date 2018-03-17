import React from "react";
import DoctorSearch from "../components/content/DoctorSearch";
import { List } from "antd";
import { AppConsumer } from "../App";

export default class DoctorSearchContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
      context: {}
    };
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(value) {
    // this.state.context.getPatientByName(value).then(patient => {
    //   console.log(patient);
    // });
  }

  render() {
    return (
      <div className="search">
        <DoctorSearch onSearch={this.onSearch} />
        <List
          className="search-list"
          size="large"
          bordered
          dataSource={this.state.results}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    );
  }
}
