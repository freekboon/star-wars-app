import reducer from "./filterReducer";
import { setFilter } from "../../actions/actions";

let initialState = {};

beforeEach(() => {
  initialState = {
    filmId: null,
    speciesId: null,
    planetId: null
  };
});

describe("filter reducer", () => {
  it("should set filmId", () => {
    expect(
      reducer(initialState, setFilter({ category: "filmId", id: "some-id" }))
    ).toEqual({
      filmId: "some-id",
      speciesId: null,
      planetId: null
    });
  });
  it("should set speciesId", () => {
    expect(
      reducer(initialState, setFilter({ category: "speciesId", id: "some-id" }))
    ).toEqual({
      filmId: null,
      speciesId: "some-id",
      planetId: null
    });
  });
  it("should set planetId", () => {
    expect(
      reducer(initialState, setFilter({ category: "planetId", id: "some-id" }))
    ).toEqual({
      filmId: null,
      speciesId: null,
      planetId: "some-id"
    });
  });
  it("should set null when no id is provided", () => {
    expect(
      reducer(
        { ...initialState, planetId: "some-id" },
        setFilter({ category: "planetId", id: "" })
      )
    ).toEqual({
      filmId: null,
      speciesId: null,
      planetId: null
    });
  });
});
