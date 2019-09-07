import { ADD_TODO, TOGGLE_TODO, SET_FILTER, REMOVE_TODO } from "../config";

let nextTodoId = 0;
export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
});

export const setFilter = filter => ({
  type: SET_FILTER,
  filter
});
