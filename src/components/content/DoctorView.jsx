import React from "react";
import { Collapse, Button, Card, CardBody } from "reactstrap";
import DoctorAddEntry from "../../containers/DoctorAddEntry";
import "./DoctorView.scss";

const WELCOME = "Welcome ";
/**
 * TODO: Splitt in 2 Components; PropTypes
 */
const DoctorView = () => {
  return (
    <div className="doctor">
      <div className="doctor-header">{WELCOME} Dr. Prop </div>
      <DoctorView />
    </div>
  );
};

export default DoctorView;
