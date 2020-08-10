import React from "react";
import renderer from "react-test-renderer";
import Enzyme, { shallow } from "enzyme";
import ContributeMessage from "../components/ContributeMessage";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("ContributeMessage Component Snapshot", () => {
  it("renders a Contribute Message with instructions on how to submit to the React repo", () => {
    const component = renderer.create(<ContributeMessage />).toJSON();
    expect(component).toMatchSnapshot();
  });
  it("contains text", () => {
    const component = shallow(<ContributeMessage />);
    expect(component.find("h4")).toBeTruthy();
  });
});
