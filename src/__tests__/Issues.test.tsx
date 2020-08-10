import React from "react";
import renderer from "react-test-renderer";
import Issues from "../components/Issues";

describe("Issues Component", () => {
  it("renders an issue component with Issue title and details of author", () => {
    const component = renderer
      .create(
        <Issues key={1} login={"H"} title={"e"} number={3} created_at={"s"} />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

