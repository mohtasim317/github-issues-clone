import React, { FC } from "react";
import "../index.css";

interface Props {
  key: number;
  title: string;
  number: number;
  login: string;
  // id: number;
}

const Issues: FC<Props> = (props) => {
  return (
    <div className="issue">
      <div className="svg-and-issue">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="svg open-issue-svg"
          viewBox="0 0 16 16"
          version="1.1"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"
          ></path>
        </svg>
        <h4 className="issue-title">{props.title}</h4>
      </div>
      <p className="issue-creator">
        #{props.number} opened yesterday by {props.login}
      </p>
    </div>
  );
};

export default Issues;
