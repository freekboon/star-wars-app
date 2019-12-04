import React from "react";
import Menus from "./Menus";
import { shallow } from "enzyme";

describe("menus component", () => {
  it("should render", () => {
    const wrapper = shallow(<Menus />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
