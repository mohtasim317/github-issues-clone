import React, { FC } from "react";
import "../index.css";

//change "any" on line 5
const RepoHeader: FC = () => {
  return (
    <div className="repo-header">
      <div className="link-and-buttons">
        <div className="links">
          <a href="https://www.google.com">facebook/react</a>
          <a href="https://www.google.com">facebook/react</a>
        </div>
        <div className="button-list">
          <div className="watch button">1</div>
          <div className="star button">2</div>
          <div className="fork button">3</div>
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
