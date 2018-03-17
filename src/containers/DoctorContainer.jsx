import React from "react";
import DoctorView from "../components/content/DoctorView";

export default class DoctorContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  render() {
    <DoctorView />;
  }
}
