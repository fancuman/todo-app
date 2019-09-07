import { SHOW_ALL, SET_FILTER } from "../config";

const visibileFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
  }
  return state;
};

export default visibileFilter;
