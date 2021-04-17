import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { todo } from "../api/todoAPI";

const initialState = {
  status: 'idle',
  entities: {},
};

// async thunk functions
export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async () => {
    const response = await todo.getAll()
    return response
  }
);
export const createTodo = createAsyncThunk(
  "todos/createTodo",
  async (todoText) => {
    return await addTodo(todoText);
  }
);
export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (todoId) => {
    await removeTodo(todoId);
  }
);

// createSlice uses a library called Immer inside. 
// Immer uses a special JS tool called a Proxy to wrap the data you provide, 
// and lets you write code that "mutates" that wrapped data.
// Immer tracks all the changes you've tried to make, and then uses that list of changes to return a safely immutably updated value
// You can only write "mutating" logic in Redux Toolkit's createSlice and createReducer because they use Immer inside
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoToggled(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
    }
  },
  extraReducers: {
    [fetchTodos.fulfilled]: (state, action) => {
      // add a random color from array below as to the color property of todos 
      const colors = ["Red", "Yellow", "Green", "Blue", "Orange", "Purple", null];
      let todos = action.payload.filter((todo) => todo.id <= 5);
      return todos.map(todo => {
        let newTodo = Object.assign({}, todo)
        newTodo.color = colors[[Math.floor(Math.random() * colors.length)]];
        return newTodo;
      });
    },
    [createTodo.fulfilled]: (state, action) => {
      const todo = action.payload
      state.entities[todo.id] = todo
    },
    [deleteTodo.fulfilled]: (state, action) =>
      state.todos.filter((todo) => todo.id !== action.payload),
  },
});

export default todosSlice.reducer;
