import { combineReducers } from "redux";
import charactersReducer from "./characterReducer/charactersReducer";
import filterReducer from "./filterReducer/filterReducer";

export default combineReducers({
  characters: charactersReducer,
  filter: filterReducer
});
