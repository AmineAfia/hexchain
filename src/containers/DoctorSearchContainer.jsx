import React from "react";
import DoctorSearch from "../components/content/DoctorSearch";
import { List } from "antd";
import { AppConsumer } from "../App";

export default class DoctorSearchContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
      context: {},
      currentPatientId: 0
    };
    this.onSearch = this.onSearch.bind(this);
    this.showProfile = this.showProfile.bind(this);
  }

  onSearch(value) {
    // console.log("------------------->", this.props.healthInstance);
    this.props.healthInstance.getPatientByName.call(value).then(patient => {
      this.setState({ currentPatientId: patient.id });
      this.props.healthInstance.getPatientBalanceByName
        .call(value)
        .then(balance => {
          var euroPrice =
            parseFloat(web3.fromWei(balance.toString(), "ether")) * 418;

          var tmpString =
            patient +
            "  |  " +
            "balance: " +
            web3.fromWei(balance.toString(), "ether") +
            " ETH" +
            "( " +
            euroPrice +
            " EUR )";
          this.setState({ results: [tmpString] });
        });
    });
  }

  showProfile() {
    this.props.healthInstance
      .patients(this.state.currentPatientId)
      .then(data => {
        console.log(data[0]);
      });
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
          renderItem={item => (
            <List.Item
              actions={[<a onClick={this.showProfile}>Show Profile</a>]}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}
