import reducer from "./charactersReducer";
import {
  addFilmCharacters,
  addPlanetCharacters,
  addSpeciesCharacters
} from "../../actions/actions";

let initialState;

const Lala = { name: "Lala" };
const Tinky = { name: "Tinky" };
const Po = { name: "Po" };
const Dipsy = { name: "Dipsy" };

beforeEach(() => {
  initialState = {
    filmCharacters: [],
    speciesCharacters: [],
    planetCharacters: [],
    allCharacters: []
  };
});

describe("characters reducer", () => {
  it("should add film characters", () => {
    const state = reducer(initialState, addFilmCharacters([Lala]));
    expect(state.filmCharacters).toEqual([Lala]);
  });
  it("should add species characters", () => {
    const state = reducer(initialState, addSpeciesCharacters([Tinky]));
    expect(state.speciesCharacters).toEqual([Tinky]);
  });
  it("should add planet characters", () => {
    const state = reducer(initialState, addPlanetCharacters([Po]));
    expect(state.planetCharacters).toEqual([Po]);
  });
  it("should compare and merge all characters", () => {
    const oldState = {
      filmCharacters: [Tinky, Lala, Po, Dipsy],
      speciesCharacters: [Tinky, Lala, Po],
      planetCharacters: [],
      allCharacters: [Tinky, Lala]
    };
    const state = reducer(oldState, addPlanetCharacters([Tinky]));
    expect(state.allCharacters).toEqual([Tinky]);
  });
});
