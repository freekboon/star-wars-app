import { combineReducers } from "redux";
import filterReducer from "./filterReducer/filterReducer";

export default combineReducers({
  filter: filterReducer
});
