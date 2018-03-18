import React from "react";
import { Collapse } from "antd";
import DoctorAddEntry from "../../containers/DoctorAddEntry";
import DoctorSearchContainer from "../../containers/DoctorSearchContainer";
import IconComps from "../IconComps";
import "./DoctorView.scss";

const { Panel } = Collapse;
const WELCOME = "Welcome ";
const ADD = "Add a Patient";

const DoctorView = props => {
  return (
    <div className="doctor">
      <div className="doctor-header">
        <a href="localhost:8080/">
          <img
            style={{
              height: "73px",
              marginRight: "26px",
              display: "inline-block",
              cursor: "pointer"
            }}
            src="../../img/icon.png"
          />
        </a>
        <div style={{ display: "inline-block" }}>{WELCOME} Dr. Hex</div>
      </div>
      <div className="doctor-content">
        <div className="doctor-wrapper">
          <Collapse
            accordion
            defaultActiveKey={["1"]}
            style={{ width: "800px" }}
          >
            <Panel header="Add a patient" key="1">
              <DoctorAddEntry
                togglePatientOverlay={props.togglePatientOverlay}
                showPatient={props.showPatient}
                healthInstance={props.healthInstance}
                account={props.account}
              />
            </Panel>
          </Collapse>
          <DoctorSearchContainer
            healthInstance={props.healthInstance}
            account={props.account}
          />
        </div>
      </div>
    </div>
  );
};

export default DoctorView;
