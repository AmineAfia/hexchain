import React from "react";
import DoctorView from "../components/content/DoctorView";
import { AppConsumer } from "../App";

export default class DoctorContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
      name: ""
    };
  }

  render() {
    return (
      <AppConsumer>
        {context => {
          if (context && !this.state.name) {
            context.doctors(1).then(doc => {
              this.setState({
                name: doc[1],
                healthInstance: context
              });
            });
          }
          return (
            <DoctorView
              name={this.state.name}
              healthInstance={this.state.healthInstance}
            />
          );
        }}
      </AppConsumer>
    );
  }
}
