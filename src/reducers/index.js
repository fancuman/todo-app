import { combineReducers } from "redux";
import todos from "./todos";
import visibleFilter from "./visibleFilter";
const todoReducers = combineReducers({
  todos,
  visibleFilter
});

export default todoReducers;
