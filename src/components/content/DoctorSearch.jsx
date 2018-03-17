import React from "react";
import { Input } from "antd";

const Search = Input.Search;
const DoctorSearch = props => {
  return (
    <Search
      className="search-input"
      placeholder="Search for patient"
      enterButton="Search"
      size="large"
      onSearch={props.onSearch}
    />
  );
};

export default DoctorSearch;
