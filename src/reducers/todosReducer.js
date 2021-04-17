import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { todo } from "../api/todoAPI";
import { generateRandomColor } from '../utils/helpers';

// createEntityAdapter: gives us an "adapter" object that contains several premade reducer functions
// getInitialState: returns an object that looks like { ids: [], entities: {} }, 
// for storing a normalized state of items along with an array of all item IDs
// getSelectors: generates a standard set of selector functions
const todosAdapter = createEntityAdapter()
const initialState = todosAdapter.getInitialState({ status: 'idle' })

// async thunk action creators
export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  () => todo.getAll().then(response => response) 
);

export const saveNewTodo = createAsyncThunk(
  "todos/createTodo",
  async (newTodo) => {
    return await todo.post({...newTodo}).then(response => response);
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
    todoDeleted: todosAdapter.removeOne,
    todoToggled(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
  },
  extraReducers: {
    [fetchTodos.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchTodos.fulfilled]: (state, action) => {
      const newEntities = {};
      action.payload.slice(0, 6).forEach((todo) => {
        newEntities[todo.id] = todo;
        newEntities[todo.id]["color"] = generateRandomColor();
      });
      state.entities = newEntities;
      state.status = "idle";
    },
    [saveNewTodo.fulfilled]: todosAdapter.addOne,
  },
});

export const {
  todoDeleted,
  todoToggled,
} = todosSlice.actions;

export default todosSlice.reducer;
