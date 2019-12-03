import React from "react";
import PlanetsMenu from "./PlanetsMenu";
import { shallow } from "enzyme";

let wrapper;

beforeEach(() => {
  jest.mock("setAllPlanets", () => ({
    setFilms: jest.fn()
  }));
  wrapper = shallow(<PlanetsMenu />);
});

xdescribe("planets menu", () => {
  it("should fetch all planets", () => {});
  it("should map residents to species", () => {});
});
