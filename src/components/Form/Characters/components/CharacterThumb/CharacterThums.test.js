import React from "react";
import CharacterThumb from "./CharacterThumb";
import { shallow } from "enzyme";

xdescribe("character thumb component", () => {
  it("should render", () => {
    const wrapper = shallow(<CharacterThumb />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
