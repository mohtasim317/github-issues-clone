import React, { FC } from "react";

const ContributeMessage: FC = () => {
  return (
    <div className="contribute-message">
      <div className="contribute-first-line">
        <h4 className="contribute">
          <span role="img" aria-label="hand waving emoji" className="hand-emoji">
            👋
          </span>
          <div className="contribute-first-line-text">
            Want to contribute to facebook/react?
          </div>
        </h4>
      </div>
      <p className="contribute">
        If you have a bug or an idea, read the contributing guidelines before
        opening an issue.
      </p>
    </div>
  );
};

export default ContributeMessage;
