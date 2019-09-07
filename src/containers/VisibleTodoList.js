import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "../config";
import { toggleTodo, removeTodo } from "../actions";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      throw new Error("Unknown filter:" + filter);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibleFilter)
});
const mapDispatchToProps = {
  onTodoClick: toggleTodo,
  onTodoRemove: removeTodo
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
export default VisibleTodoList;
