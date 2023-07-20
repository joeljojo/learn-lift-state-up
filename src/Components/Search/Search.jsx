import React from "react";
import "./Search.css";
const Search = ({ onChange }) => {
  return (
    <div className="search">
      <input onChange={onChange} type="text" placeholder="Search by Category" />
    </div>
  );
};

export default Search;
