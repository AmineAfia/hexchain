import React from "react";
import DoctorView from "../components/content/DoctorView";
import { AppConsumer } from "../App";

export default class DoctorContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  render() {
    return (
      <AppConsumer>
        {context => {
          if (context) {
            context.patients(1).then(data => console.log(data));
          }
          return <DoctorView />;
        }}
      </AppConsumer>
    );
  }
}
