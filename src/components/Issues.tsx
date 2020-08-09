import React, { FC } from "react";
import "../index.css";

interface Props {
  key: number;
  title: string;
  number: number;
  // id: number;
}

const Issues: FC<Props> = (props) => {
  return (
    <div className="issue">
      <p>{props.title}</p>
      <p>#{props.number} opened yesterday by </p>
    </div>
  );
};

export default Issues;
