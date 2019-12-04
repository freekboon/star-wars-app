import { createAction } from "../utils/actionHelpers/actionHelpers";
// Types
export const SET_FILM_FILTER = "SET_FILM_FILTER";
export const SET_SPECIES_FILTER = "SET_SPECIES_FILTER";
export const SET_PLANET_FILTER = "SET_PLANET_FILTER";
export const ADD_CHARACTERS = "ADD_CHARACTERS";

// Actions
export const setFilmFilter = createAction(SET_FILM_FILTER);
export const setSpeciesFilter = createAction(SET_SPECIES_FILTER);
export const setPlanetFilter = createAction(SET_PLANET_FILTER);
export const addCharacters = createAction(ADD_CHARACTERS);
