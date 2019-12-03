import React from "react";
import SpeciesMenu from "./SpeciesMenu";
import { shallow } from "enzyme";

let wrapper;

beforeEach(() => {
  jest.mock("setAllSpecies", () => ({
    setFilms: jest.fn()
  }));
  wrapper = shallow(<SpeciesMenu />);
});

xdescribe("species menu", () => {
  it("should fetch all species", () => {});
  it("should map homeworlds to planets", () => {});
});
