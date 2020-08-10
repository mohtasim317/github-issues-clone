import React from "react";
import renderer from "react-test-renderer";
import IssueHeader from "../components/IssueHeader";

describe("IssuesHeader Component Snapshot", () => {
  it("renders an IssueHeader component with lots of buttons and status updates on issues", () => {
    const component = renderer.create(<IssueHeader />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
