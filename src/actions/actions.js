import { createAction } from "../utils/actionHelpers/actionHelpers";
// Types
export const ADD_FILM_CHARACTERS = "ADD_FILM_CHARACTERS";
export const ADD_SPECIES_CHARACTERS = "ADD_SPECIES_CHARACTERS";
export const ADD_PLANET_CHARACTERS = "ADD_PLANET_CHARACTERS";
export const SET_FILTER = "SET_FILTER";

// Actions
export const addFilmCharacters = createAction(ADD_FILM_CHARACTERS);
export const addSpeciesCharacters = createAction(ADD_SPECIES_CHARACTERS);
export const addPlanetCharacters = createAction(ADD_PLANET_CHARACTERS);
export const setFilter = createAction(SET_FILTER);
