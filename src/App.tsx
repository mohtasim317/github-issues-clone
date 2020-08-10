import React, { useState, useEffect, FC } from "react";
import RepoHeader from "./components/RepoHeader";
import SearchBar from "./components/SearchBar";
import Issues from "./components/Issues";
import IssueHeader from "./components/IssueHeader";
import ContributeMessage from "./components/ContributeMessage";
import "./index.css";

export interface GithubData {
  title: string;
  number: number;
  created_at: string;
  user: {
    login: string;
  };
}

const App: FC = () => {
  const [fetchStatus, updateStatus] = useState<Boolean>(false);
  const [data, updateData] = useState<GithubData[]>([]);
  const [searchValue, updateSearchValue] = useState<string>("");

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

  const handleChange = (event: { target: HTMLInputElement }) => {
    updateSearchValue(event.target.value);
  };

  return (
    <div className="app">
      {fetchStatus ? (
        <div className="rendered-app">
          <RepoHeader />
          <div className="search-and-list-container">
            <ContributeMessage />
            <SearchBar searchingFunction={handleChange} />
            <div className="list-of-issues">
              <IssueHeader />
              {data
                // eslint-disable-next-line array-callback-return
                .filter((issue) => {
                  if (issue.title.toLowerCase().includes(searchValue)) {
                    return issue;
                  }
                })
                .map((issue, index) => {
                  return (
                    <div className="issue-row">
                      <Issues
                        key={index}
                        login={issue.user.login}
                        title={issue.title}
                        number={issue.number}
                        created_at={issue.created_at}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      ) : (
        <h1> Fetching data</h1>
      )}
    </div>
  );
};

export default App;
