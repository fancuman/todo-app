import reducers from "./reducers";

test("reducers init", () => {
  let state;
  state = reducers(undefined, {});
  expect(state).toEqual({ todos: [], visibleFilter: "SHOW_ALL" });
});

test("reducers ADD_TODO", () => {
  let state;
  state = reducers(
    { todos: [], visibleFilter: "SHOW_ALL" },
    { type: "ADD_TODO", id: 0, text: "task1" }
  );
  expect(state).toEqual({
    todos: [{ id: 0, text: "task1", completed: false }],
    visibleFilter: "SHOW_ALL"
  });
});

test("reducers SET_FILTER SHOW_COMPLETED", () => {
  let state;
  state = reducers(
    {
      todos: [{ id: 0, text: "task1", completed: false }],
      visibleFilter: "SHOW_ALL"
    },
    { type: "SET_FILTER", filter: "SHOW_COMPLETED" }
  );
  expect(state).toEqual({
    todos: [{ id: 0, text: "task1", completed: false }],
    visibleFilter: "SHOW_COMPLETED"
  });
});

test("reducers SET_FILTER SHOW_ACTIVE", () => {
  let state;
  state = reducers(
    {
      todos: [{ id: 0, text: "task1", completed: false }],
      visibleFilter: "SHOW_COMPLETED"
    },
    { type: "SET_FILTER", filter: "SHOW_ACTIVE" }
  );
  expect(state).toEqual({
    todos: [{ id: 0, text: "task1", completed: false }],
    visibleFilter: "SHOW_ACTIVE"
  });
});

test("reducers SET_FILTER SHOW_ALL", () => {
  let state;
  state = reducers(
    {
      todos: [{ id: 0, text: "task1", completed: false }],
      visibleFilter: "SHOW_ACTIVE"
    },
    { type: "SET_FILTER", filter: "SHOW_ALL" }
  );
  expect(state).toEqual({
    todos: [{ id: 0, text: "task1", completed: false }],
    visibleFilter: "SHOW_ALL"
  });
});
