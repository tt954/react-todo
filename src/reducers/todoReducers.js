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
    [fetchTodos.fulfilled]: (state, action) => {
      // add a random color from array below as to the color property of todos 
      const colors = ["Red", "Yellow", "Green", "Blue", "Orange", "Purple", null];
      let newTodos =  action.payload.map(todo => {
        let newTodo = Object.assign({}, todo)
        newTodo.color = colors[[Math.floor(Math.random() * colors.length)]];
        return newTodo;
      });
      return newTodos.filter(todo => todo.id <= 50)
    },
    [createTodo.fulfilled]: (state, action) => state.todos.push(action.payload),
    [deleteTodo.fulfilled]: (state, action) =>
      state.todos.filter((todo) => todo.id !== action.payload),
  },
});

export default todosSlice.reducer;
