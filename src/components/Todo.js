import React from "react";

export default function Todo({ text, completed, onClick, onTodoRemove }) {
  return (
    <li
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
      //pay attention to syntax
      style={{ textDecoration: completed ? "line-through" : "none" }}
    >
      {text}
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button
        onClick={e => {
          e.stopPropagation();
          onTodoRemove();
        }}
      >
        Delete
      </button>
    </li>
  );
}
