import reducer from "./charactersReducer";
import { addCharacters } from "../actions/actions";

let state;

beforeEach(() => {
  state = [];
});

describe("characters reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(state, [])).toEqual([]);
  });
  it("should add character when not present in state", () => {
    expect(reducer(state, addCharacters([1, 2, 3]))).toEqual([1, 2, 3]);
  });
  it("should not add character when present in state", () => {
    expect(reducer([2], addCharacters([1, 2, 3]))).toEqual([2, 1, 3]);
  });
});
