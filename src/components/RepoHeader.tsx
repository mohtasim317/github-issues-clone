import React, { FC } from "react";
import "../index.css";

//change "any" on line 5
const RepoHeader: FC = () => {
  return (
    <div className="repo-header">
      <div className="link-and-buttons">
        <div className="repo-links">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none"
            viewBox="0 0 16 16"
            version="1.1"
            role="img"
          >
            <path
              fillRule="evenodd"
              d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
            ></path>
          </svg>
          <a href="https://www.google.com" className="blue-link">
            facebook
          </a>
          <span> / </span>
          <a href="https://www.google.com" className="blue-link">
            react
          </a>
        </div>
        <div className="button-list">
          <a href="https://google.com" className="button watch">
            Watch
          </a>
          <a href="https://yahoo.com" className="button star">
            Star
          </a>
          <a href="https://bing.com" className="button fork">
            Fork
          </a>
        </div>
      </div>
      <div className="tabs-row">
        <div className="tabs">
          <a
            href="https://github.com/facebook/react"
            className="tab code-button"
          >
            Code
          </a>
          <a
            href="https://github.com/facebook/react/issues"
            className="tab issues-button"
          >
            Issues
          </a>
          <a
            href="https://github.com/facebook/react/pulls"
            className="tab pull-button"
          >
            Pull Requests
          </a>
          <a
            href="https://github.com/facebook/react/actions"
            className="tab actions-button"
          >
            Actions
          </a>
          <a
            href="https://github.com/facebook/react/projects"
            className="tab projects-button"
          >
            Projects
          </a>
          <a
            href="https://github.com/facebook/react/wiki"
            className="tab wiki-button"
          >
            Wiki
          </a>
          <a
            href="https://github.com/facebook/react/security"
            className="tab security-button"
          >
            Security
          </a>
          <a
            href="https://github.com/facebook/react/pulse"
            className="tab insights-button"
          >
            Insights
          </a>
        </div>
      </div>
    </div>
  );
};

export default RepoHeader;
