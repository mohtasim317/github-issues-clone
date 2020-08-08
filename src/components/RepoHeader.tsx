import React, { useState, useEffect, FC } from "react";
import "../index.css";

//change "any" on line 5
const RepoHeader: FC = () => {
  return (
    <div className="repo-header">
      <div className="link-and-buttons">
        <a href="https://www.google.com">facebook/react</a>
        <div>
          <div></div>
          <a></a>
        </div>
      </div>
      <div className="tabs">
        <nav>
          <ul className="">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default RepoHeader;
