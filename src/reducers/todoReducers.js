import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllTodos, addTodo, removeTodo } from "../api/todoAPI";

const initialState = [];

// async thunk actions
export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async () => await getAllTodos()
);
export const createTodo = createAsyncThunk(
  "todos/createTodos",
  async (newTodo) => {
    return await addTodo(newTodo);
  }
);
export const deleteTodo = createAsyncThunk(
  "todos/deleteTodos",
  async (todoId) => {
    await removeTodo(todoId);
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTodos.fulfilled]: (state, action) => action.payload,
    [createTodo.fulfilled]: (state, action) => state.todos.push(action.payload),
    [deleteTodo.fulfilled]: (state, action) =>
      state.todos.filter((todo) => todo.id !== action.payload),
  },
});

export default todosSlice.reducer;
