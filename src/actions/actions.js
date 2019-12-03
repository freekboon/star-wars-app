// Types
export const ADD_CHARACTERS = "ADD_CHARACTERS";

// Actions
export const addCharacters = payload => {
  return {
    type: ADD_CHARACTERS,
    payload
  };
};
