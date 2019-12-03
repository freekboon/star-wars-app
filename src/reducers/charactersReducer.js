import { ADD_CHARACTERS } from "../actions/actions";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CHARACTERS:
      const newCharacters =
        payload &&
        payload.filter(newChar =>
          state.length
            ? state.find(oldChar => oldChar.name !== newChar.name)
            : newChar
        );

      const existingCharacters =
        payload &&
        state.filter(oldChar =>
          payload.find(newChar => newChar.name === oldChar.name)
        );

      return payload ? [...newCharacters, ...existingCharacters] : state;
    default:
      return state;
  }
};
