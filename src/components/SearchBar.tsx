import React, { useState, useEffect } from "react";
import "../index.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        placeholder="search"
        style={{ fontSize: "12px" }}
        // onChange={props.onChange}
        // value={props.value}
        // type={props.type}
      ></input>
    </div>
  );
};

export default SearchBar;
