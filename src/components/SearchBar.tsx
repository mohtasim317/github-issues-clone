import React, { FC } from "react";
import "../index.css";

interface Props {
  searchingFunction: any;
  // onChange: React.FormEventHandler<HTMLInputElement>): void
}

const SearchBar: FC<Props> = (props) => {
  return (
    <div className="search-bar-row">
      <input
        className="search-bar"
        placeholder="is:issue is:open "
        style={{ fontSize: "12px" }}
        onChange={props.searchingFunction}
        // type={props.type}
      ></input>
    </div>
  );
};

export default SearchBar;
