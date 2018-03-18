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
          <button onClick={clickedDoctor}>
            <img src="../../img/doctor.svg" />
            Doctor Login
          </button>
          <button onClick={clickedInstitute}>
            <img src="../../img/institute.svg" width="100%" />
            Organization Search
          </button>
        </div>
      );
    } else {
      if (this.state.redirect == "doctor") {
        this.setState({ redirect: true });
        return <Redirect to="/login" push />;
      } else {
        this.setState({ redirect: true });
        return <Redirect to="/orgasearch" push />;
      }
    }
  }
}
