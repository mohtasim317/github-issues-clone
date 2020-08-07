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
  const [fetchStatus, updateStatus] = useState<Boolean>();
  const [data, updateData] = useState<GithubData[]>([]);

  const fetchData = async () => {
    updateStatus(false);
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
        <h1> We got the data {data[0].id}</h1>
      ) : (
        <h1> Fetching data</h1>
      )}
      <Header />
      <SearchBar />
      <Issues />
    </div>
  );
};

export default App;
