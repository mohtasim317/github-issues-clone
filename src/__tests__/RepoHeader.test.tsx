import React from "react";
import renderer from "react-test-renderer";
import RepoHeader from "../components/RepoHeader";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("RepoHeader Component Snapshot", () => {
  it("renders the header of the repository including statistics relating to the popularity of the repo", () => {
    const component = renderer.create(<RepoHeader />).toJSON();
    expect(component).toMatchSnapshot();
  });
  it("contains links", () => {
    const component = shallow(<RepoHeader />);
    expect(component.find("a")).toBeTruthy();
  });
});
