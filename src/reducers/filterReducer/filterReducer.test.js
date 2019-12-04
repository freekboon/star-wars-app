import reducer from "./filterReducer";
import {
  setFilmFilter,
  setPlanetFilter,
  setSpeciesFilter
} from "../../actions/actions";

let initialState = {};

beforeEach(() => {
  initialState = {
    filmId: null,
    speciesId: null,
    planetId: null,
    characters: [
      {
        films: [{ id: 1 }, { id: 2 }],
        species: [{ id: 1 }, { id: 2 }],
        planets: [{ id: 1 }, { id: 2 }]
      },
      {
        films: [{ id: 2 }],
        species: [{ id: 2 }],
        planets: [{ id: 2 }]
      }
    ]
  };
});

describe("filter reducer", () => {
  describe("Setting films filter", () => {
    let state;
    beforeEach(() => {
      state = reducer(initialState, setFilmFilter(1));
    });
    it("should set film id", () => {
      expect(state.filmId).toEqual(1);
    });
    it("should filter the characters by film id", () => {
      expect(state.characters.length).toEqual(1);
    });
  });
  describe("Setting species filter", () => {
    let state;
    beforeEach(() => {
      state = reducer(initialState, setSpeciesFilter(1));
    });
    it("should set specis id", () => {
      expect(state.speciesId).toEqual(1);
    });
    it("should filter the characters by species id", () => {
      expect(state.characters.length).toEqual(1);
    });
  });

  describe("Setting planet filter", () => {
    let state;
    beforeEach(() => {
      state = reducer(initialState, setPlanetFilter(1));
    });
    it("should set planet id", () => {
      expect(state.planetId).toEqual(1);
    });
    it("should filter the characters by planet id", () => {
      expect(state.characters.length).toEqual(1);
    });
  });
});
