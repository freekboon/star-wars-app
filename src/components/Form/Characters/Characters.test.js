import React from "react";
import Characters from "./Characters";
import { shallow } from "enzyme";

xdescribe("characters component", () => {
  it("should render", () => {
    const wrapper = shallow(<Characters />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
