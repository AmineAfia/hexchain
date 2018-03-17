import React from "react";
import { Input } from "antd";

const Search = Input.Search;
const DoctorSearch = () => {
  return (
    <Search
      style={{ margin: "50px 0" }}
      placeholder="Search for patient"
      enterButton="Search"
      size="large"
    />
  );
};

export default DoctorSearch;
