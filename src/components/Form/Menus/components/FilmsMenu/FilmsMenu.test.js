import React from "react";
import FilmsMenu from "./FilmsMenu";
import { shallow } from "enzyme";

let wrapper;

beforeEach(() => {
  jest.mock("setFilms", () => ({
    setFilms: jest.fn()
  }));
  wrapper = shallow(<FilmsMenu />);
});

xdescribe("films menu", () => {
  it("should fetch films", () => {});
  it("should set names on each film", () => {});
});
