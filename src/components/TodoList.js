import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, onTodoClick, onTodoRemove }) {
  return (
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
          onTodoRemove={() => onTodoRemove(todo.id)}
        />
      ))}
    </ul>
  );
}
