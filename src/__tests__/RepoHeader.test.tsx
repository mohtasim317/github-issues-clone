import React from "react";
import renderer from "react-test-renderer";
import RepoHeader from "../components/RepoHeader";

describe("RepoHeader Component Snapshot", () => {
  it("renders the header of the repository including statistics relating to the popularity of the repo", () => {
    const component = renderer.create(<RepoHeader />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
