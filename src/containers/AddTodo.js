import React from "react";
import { addTodo } from "../actions";
import { connect } from "react-redux";
let AddTodo = ({ dispatch }) => {
  let todoTarget;
  return (
    <form
      onSubmit={e => {
        //注意此处调用preventDefault防止页面刷新
        e.preventDefault();
        dispatch(addTodo(todoTarget.value));
        todoTarget.value = "";
      }}
    >
      <input
        ref={input => {
          todoTarget = input;
        }}
      />
      <button type="submit">Add new</button>
    </form>
  );
};

AddTodo = connect()(AddTodo);
export default AddTodo;
