import React from "react";
import { Card } from "antd";
import "./PatientProfile.scss";

const PatientProfile = props => {
  console.log(props);
  return (
    <Card
      title="The following patient profile was created"
      extra={<a onClick={props.onClose}>Close</a>}
      style={{ width: 300 }}
      className="patient"
    >
      <p className="patient-name">
        <span className="patient-tag">Name: </span>
        {props.patient.name}
      </p>
      <p className="patient-age">
        <span className="patient-tag">Age:</span> {props.patient.age}
      </p>
      <p className="patient-nation">
        <span className="patient-tag">Nationality:</span>{" "}
        {props.patient.nationality}
      </p>
      <p className="patient-city">
        <span className="patient-tag">City:</span> {props.patient.city}
      </p>
      <p className="patient-country">
        <span className="patient-tag">Country:</span> {props.patient.country}
      </p>
      <p className="patient-dis" />
    </Card>
  );
};

export default PatientProfile;
