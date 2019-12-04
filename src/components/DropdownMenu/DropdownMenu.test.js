import React from "react";
import { shallow } from "enzyme";
import DropdownMenu from "./DropdownMenu";
import "jest-styled-components";

const data = [
  { id: 1, label: "first" },
  { id: 2, label: "second" },
  { id: 3, label: "third" }
];

const handleSelect = jest.fn();

describe("dropdown menu", () => {
  describe("default values", () => {
    it("should display a default label", () => {
      const wrapper = shallow(<DropdownMenu options={data} />);
      expect(
        wrapper
          .find("option")
          .at(0)
          .text()
      ).toContain("Select");
    });
    it("should set an undefined value", () => {});
  });

  describe("custom values", () => {
    it("should display a label", () => {
      const wrapper = shallow(<DropdownMenu options={data} label="testing" />);
      expect(
        wrapper
          .find("option")
          .at(0)
          .text()
      ).toContain("testing");
    });
    it("should set a selected value", () => {});
  });

  describe("loading the data", function() {
    it("should display a list of options", () => {
      const wrapper = shallow(<DropdownMenu options={data} />);
      expect(wrapper.find("option")).toHaveLength(4);
    });
    it("should not render without data", () => {
      const wrapper = shallow(<DropdownMenu />);
      expect(wrapper.find("select").exists()).toBeFalsy();
    });
  });

  describe("selecting options", () => {
    it("should handle a select event", () => {
      const event = {
        target: {
          value: 1
        }
      };
      const wrapper = shallow(
        <DropdownMenu options={data} handleSelect={handleSelect} />
      );

      wrapper.find("Select").simulate("change", event);
      expect(handleSelect).toHaveBeenCalledWith(1);
    });
  });
});
