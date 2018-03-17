import React from "react";
import { Collapse, Button, Card, CardBody } from "reactstrap";
import "./DoctorView.scss";

const WELCOME = "Welcome ";
/**
 * TODO: Splitt in 2 Components; PropTypes
 */
const DoctorView = () => {
  return (
    <div className="doctor">
      <div className="doctor-header">{WELCOME} Dr. Prop </div>
      <div className="doctor-addentry">
        Add Entry<i className="fas fa-plus icon-right" />
      </div>
      <Button
        color="primary"
        onClick={() => console.log("K")}
        style={{ marginBottom: "1rem" }}
      >
        Toggle
      </Button>
      <Collapse isOpen={false}>
        <Card>
          <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </CardBody>
        </Card>
      </Collapse>
      <input className="doctor-search" />
    </div>
  );
};

export default DoctorView;
