import React, { FC } from "react";

const ContributeMessage: FC = () => {
  return (
    <div className="contribute-message">
      <div className="contribute-first-line">
        <h4 className="contribute contribute-one">
          <span
            role="img"
            aria-label="hand waving emoji"
            className="hand-emoji"
          >
            👋
          </span>
          <div className="contribute-first-line-text">
            Want to contribute to facebook/react?
          </div>
        </h4>
      </div>
      <p className="contribute contribute-two">
        If you have a bug or an idea, read the
        <span>
          <a
            href="https://github.com/facebook/react/blob/master/CONTRIBUTING.md"
            className="contributing-link"
          >
            {" "}
            contributing guidelines{" "}
          </a>
        </span>
        before opening an issue.
      </p>
    </div>
  );
};

export default ContributeMessage;
