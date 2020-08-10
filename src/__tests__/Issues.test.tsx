import React from "react";
import renderer from "react-test-renderer";
import Issues from "../components/Issues";

describe("Component", () => {
  it("is pretty cool", () => {
    const component = renderer
      .create(
        <Issues key={1} login={"H"} title={"e"} number={3} created_at={"s"} />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
