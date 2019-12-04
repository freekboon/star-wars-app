import React from "react";
import WithLoadingScreen from "./WithLoadingScreen";
import { shallow } from "enzyme";

describe("loading screen", () => {
  it("should show a loading screen when loading", () => {
    const wrapper = shallow(<WithLoadingScreen loading={true} />);
    expect(wrapper.find("Loader").exists()).toBeTruthy();
  });
  it("should show the child component when done loading", () => {
    const wrapper = shallow(<WithLoadingScreen loading={false} />);
    expect(wrapper.find("Loader").exists()).toBeFalsy();
  });
});
