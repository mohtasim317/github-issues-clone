import React, { useState, useEffect, FC } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Issues from "./components/Issues";
import "./index.css";

export interface GithubData {
  url: string;
  number: number;
  id: number;
}

const App: FC = () => {
  const [fetchStatus, updateStatus] = useState<Boolean>(false);
  const [data, updateData] = useState<GithubData[]>([]);

  const fetchData = async () => {
    try {
      const info = await fetch(
        "https://api.github.com/repos/facebook/react/issues"
      );
      const vals = await info.json();
      updateData(vals);
      updateStatus(true);
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      {fetchStatus ? (
        <div>
          <h1> We got the data {data[0].id}</h1>
          <Header />
          <SearchBar />
          <Issues key="1" id={data[0].id} url={data[0].url} number={data[0].number} />
        </div>
      ) : (
        <h1> Fetching data</h1>
      )}
    </div>
  );
};

export default App;
