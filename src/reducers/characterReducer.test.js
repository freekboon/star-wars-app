import reducer from "./charactersReducer";
import { addCharacters } from "../actions/actions";

let state;

const character1 = { name: "Lala" };
const character2 = { name: "Po" };
const character3 = { name: "Tinky" };

beforeEach(() => {
  state = [];
});

describe("characters reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(state, [])).toEqual([]);
  });
  it("should add character when not present in state", () => {
    const payload = [character1, character2];
    expect(reducer(state, addCharacters(payload))).toEqual(payload);
  });
  it("should not add character when present in state", () => {
    const payload = [character1, character2];
    expect(reducer([character1], addCharacters(payload))).toEqual([
      character2,
      character1
    ]);
  });
  it("should remove a character when not present in payload", () => {
    expect(
      reducer([character1], addCharacters([character2, character3]))
    ).toEqual([character2, character3]);
  });
});
