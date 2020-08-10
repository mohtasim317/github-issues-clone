import React from "react";
import renderer from "react-test-renderer";
import SearchBar from "../components/SearchBar";

describe("SearchBar Component", () => {
  it("creates a search bar which filters data based on input", () => {
    const component = renderer.create(<SearchBar searchingFunction />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
