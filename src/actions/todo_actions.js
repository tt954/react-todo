import * as TodoAPI from "../util/todoAPI";

export const RECEIVE_TODOS = "RECEIVE_TODOS";

const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos,
});

export const fetchTracks = () => (dispatch) =>
  TodoAPI.getAllTodos().then((todos) => dispatch(receiveTodos(todos)));
