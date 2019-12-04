import {
  ADD_CHARACTERS,
  SET_FILM_FILTER,
  SET_PLANET_FILTER,
  SET_SPECIES_FILTER
} from "../../actions/actions";

const initialState = {
  filmId: null,
  speciesId: null,
  planetId: null,
  characters: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FILM_FILTER: {
      return {
        ...state,
        filmId: payload,
        characters: state.characters.filter(character =>
          character.films.find(film => film.id === payload)
        )
      };
    }
    case SET_SPECIES_FILTER: {
      return {
        ...state,
        speciesId: payload,
        characters: state.characters.filter(character =>
          character.species.find(_species => _species.id === payload)
        )
      };
    }
    case SET_PLANET_FILTER: {
      return {
        ...state,
        planetId: payload,
        characters: state.characters.filter(character =>
          character.planets.find(planet => planet.id === payload)
        )
      };
    }
    case ADD_CHARACTERS:
      return {
        ...state,
        characters: payload
      };
    default:
      return state;
  }
};
