import React from "react";
import Form from "./Form";
import { shallow } from "enzyme";

describe("form component", () => {
  it("should render", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
