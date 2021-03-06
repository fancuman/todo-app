import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "../config";
import { stat } from "fs";

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: action.id, text: action.text, completed: false }];

    case TOGGLE_TODO:
      return state.map(todo => {
        return todo.id === action.id
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    case REMOVE_TODO:
      return state.filter(todo => todo.id != action.id);
  }
  return state;
};

export default todos;
