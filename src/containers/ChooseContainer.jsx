import React, { Component } from "react";
import { Redirect } from "react-router";
import "../components/content/ChooseView.scss";

export default class ChooseContainer extends React.Component {
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
          I am...
          <button onClick={clickedDoctor}>
            <img src="../../img/doctor.svg" />
            Doctor
          </button>
          <button onClick={clickedInstitute}>
            <img src="../../img/institute.svg" />
            Institute
          </button>
        </div>
      );
    } else {
      if (this.state.redirect == "doctor")
        return <Redirect push to="/doctor" />;
      else return <Redirect push to="/orga" />;
    }
  }
}
