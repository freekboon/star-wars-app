import { SET_FILTER } from "../../actions/actions";

const initialState = {
  filmId: null,
  speciesId: null,
  planetId: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FILTER: {
      return {
        ...state,
        [payload.category]: payload.id || null
      };
    }
    default:
      return state;
  }
};
