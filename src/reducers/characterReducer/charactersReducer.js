import {
  ADD_FILM_CHARACTERS,
  ADD_PLANET_CHARACTERS,
  ADD_SPECIES_CHARACTERS
} from "../../actions/actions";

const initialState = {
  filmCharacters: [],
  speciesCharacters: [],
  planetCharacters: [],
  allCharacters: []
};

const setAllCharacters = (payload, allCharacters) =>
  allCharacters.length
    ? allCharacters.filter(oldChar =>
        payload.find(newChar => oldChar.name === newChar.name)
      )
    : payload;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FILM_CHARACTERS:
      return {
        ...state,
        filmCharacters: payload,
        allCharacters: setAllCharacters(payload, state.allCharacters)
      };
    case ADD_SPECIES_CHARACTERS:
      return {
        ...state,
        speciesCharacters: payload,
        allCharacters: setAllCharacters(payload, state.allCharacters)
      };
    case ADD_PLANET_CHARACTERS:
      return {
        ...state,
        planetCharacters: payload,
        allCharacters: setAllCharacters(payload, state.allCharacters)
      };
    default:
      return state;
  }
};
