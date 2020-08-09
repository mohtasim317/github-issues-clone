import React, { FC } from "react";

const ContributeMessage: FC = () => {
  return (
    <div className="contribute-message">
      <h4 className="contribute">
        <span role="img" aria-label="hand waving emoji">
          👋
        </span>
        Want to contribute to facebook/react?
      </h4>
      <p className="contribute">
        If you have a bug or an idea, read the contributing guidelines before
        opening an issue.
      </p>
    </div>
  );
};

export default ContributeMessage;
