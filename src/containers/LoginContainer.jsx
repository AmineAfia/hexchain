import React from "react";
import { Redirect } from "react-router";
import LoginView from "../components/content/LoginView";

export default class LoginContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      inputName: "",
      inputPass: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    console.log("HERE");
    this.setState({
      redirect: true
    });
  }

  render() {
    console.log(this.state);
    if (this.state.redirect) {
      return <Redirect push to="/doctor" />;
    } else {
      return <LoginView onSubmit={this.onSubmit} />;
    }
  }
}
