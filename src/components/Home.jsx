import React, { Component } from "react";
import { Redirect } from "react-router";
import "./Home.scss";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
  }
  render() {
    const clickedDoctor = event => {
      this.setState({ redirect: "doctor" });
    };
    const clickedInstitute = event => {
      this.setState({ redirect: "institute" });
    };

    if (this.state.redirect == false) {
      return (
        <div style={{ height: "100%", width: "100%" }}>
          <font size="12" style={{ width: "100%" }}>
            I am...
          </font>
          <button onClick={clickedDoctor}>
            <img src="../../img/doctor.svg" />
            Doctor
          </button>
          <button onClick={clickedInstitute}>
            <img src="../../img/institute.svg" width="100%" />
            Institute
          </button>
        </div>
      );
    } else {
      if (this.state.redirect == "doctor") {
        this.setState({ redirect: true });
        return <Redirect to="/doctor" push />;
      } else {
        this.setState({ redirect: true });
        return <Redirect to="/orgasearch" push />;
      }
    }
  }
}
