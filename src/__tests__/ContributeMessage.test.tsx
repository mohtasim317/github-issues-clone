import React from "react";
import renderer from "react-test-renderer";
import ContributeMessage from "../components/ContributeMessage";

describe("ContributeMessage Component Snapshot", () => {
  it("renders a Contribute Message with instructions on how to submit to the React repo", () => {
    const component = renderer.create(<ContributeMessage />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
