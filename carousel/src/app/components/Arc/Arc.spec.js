import Arc from "./Arc";
import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Arc", () => {
  const wrapper = shallow(<Arc />);
  it("renders correctly", () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it("should not have style object without props", () => {
    expect(
      wrapper
        .find("div")
        .first()
        .props()
    ).toEqual({ className: "arc" });
  });
  it("should have div component", () => {
    expect(wrapper.find("div").length).toBe(1);
  });
});
