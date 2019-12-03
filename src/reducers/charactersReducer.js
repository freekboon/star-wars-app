import { ADD_CHARACTERS } from "../actions/actions";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CHARACTERS:
      const newCharacters = payload.filter(
        character => state.indexOf(character) === -1
      );
      return state.concat(newCharacters);
    default:
      return state;
  }
};
