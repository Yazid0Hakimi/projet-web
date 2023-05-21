import isLogged from "./isLogged"
import { combineReducers } from "redux";


const allReducers = combineReducers({
  isLogged: isLogged,
  // Add other reducers here if needed
});
export default allReducers;
