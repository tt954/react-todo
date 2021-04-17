import { configureStore } from "@reduxjs/toolkit";

import todosReducer from '../reducers/todosReducer';
import filtersReducer from '../reducers/filtersReducer';

// configureStore = combineReducers + createStore
// It automatically added the thunk middleware
// It automatically added more middleware to check for common mistakes like accidentally mutating the state
// It automatically set up the Redux DevTools Extension connection

export default configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer,
  },
});
