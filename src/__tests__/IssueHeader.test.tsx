import React from "react";
import renderer from "react-test-renderer";
import IssueHeader from "../components/IssueHeader";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("IssuesHeader Component Snapshot", () => {
  it("renders an IssueHeader component with lots of buttons and status updates on issues", () => {
    const component = renderer.create(<IssueHeader />).toJSON();
    expect(component).toMatchSnapshot();
  });
  it("contains links", () => {
    const component = shallow(<IssueHeader />);
    expect(component.find("a")).toBeTruthy();
  });
});
