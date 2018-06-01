import React from "react";
import { shallow } from "enzyme";

import Carousel from "./Carousel";
import Arc from "./../Arc/Arc";
import ScoreIndicator from "./../ScoreIndicator/ScoreIndicator";
import DebtIndicator from "./../DebtIndicator/DebtIndicator";
import toJson from "enzyme-to-json";

describe("Carousel renders", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Carousel />);
  });
  it("should render correctly", () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
  it("without props, it should not render Arc component", () => {
    expect(wrapper.containsMatchingElement(<Arc />)).toBe(false);
  });
  it("without props, it should render `loading..` text", () => {
    expect(wrapper.contains("Loading . . . .")).toBe(true);
  });
  it("given props, it should render Arc component", () => {
    let wrapper = shallow(<Carousel score={500} />);
    expect(wrapper.containsMatchingElement(<Arc />)).toBe(true);
  });
});

describe("ScoreIndicator", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Carousel />);
  });
  it("should have index 0 as initial state", () => {
    expect(wrapper.state("index")).toBe(0);
  });
  it("given props, should render ScoreIndicator when index is 0", () => {
    let wrapper = shallow(<Carousel score={500} />);
    wrapper.setState({
      index: 0
    });
    expect(wrapper.containsMatchingElement(<ScoreIndicator />)).toBe(true);
  });
  it("given props, it should not render not DebtIndicator when index is 1", () => {
    let wrapper = shallow(<Carousel score={500} />);
    wrapper.setState({
      index: 1
    });
    expect(wrapper.containsMatchingElement(<ScoreIndicator />)).toBe(false);
  });
});

describe("DebtIndicator", () => {
  it("given props, it should render DebtIndicator when index is 1", () => {
    let wrapper = shallow(<Carousel score={500} />);
    wrapper.setState({
      index: 1
    });
    expect(wrapper.containsMatchingElement(<DebtIndicator />)).toBe(true);
  });
  it("given props, it should render not DebtIndicator when index is 0", () => {
    let wrapper = shallow(<Carousel score={500} />);
    wrapper.setState({
      index: 0
    });
    expect(wrapper.containsMatchingElement(<DebtIndicator />)).toBe(false);
  });
});
