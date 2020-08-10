import React from "react";
import renderer from "react-test-renderer";
import SearchBar from "../components/SearchBar";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("SearchBar Component", () => {
  it("creates a search bar which filters data based on input", () => {
    const component = renderer.create(<SearchBar searchingFunction />).toJSON();
    expect(component).toMatchSnapshot();
  });
  it("contains an input field", () => {
    const component = shallow(<SearchBar searchingFunction />);
    expect(component.find("form")).toBeTruthy();
  });
});
