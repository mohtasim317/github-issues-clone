import React, { useState, useEffect } from "react";
import "../index.css";

interface Props {
  url: string;
  number: number;
  id: number;
}
const Issues: React.FC<Props> = (props) => {
  return (
    <div>
      <h1>{props.url}</h1>
      <h1>{props.number}</h1>
      <h1>{props.id}</h1>
      <h2>ues</h2>
    </div>
  );
};

export default Issues;
