import { configureStore } from "@reduxjs/toolkit";
import todosReducer from '../reducers/todoReducers';

export default configureStore({
  reducer: {
    todos: todosReducer,
  },
});
