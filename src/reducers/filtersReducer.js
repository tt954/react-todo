import { createSlice } from "@reduxjs/toolkit";

const availableColors = ["green", "blue", "orange", "purple", "red"];
const priorities = ["low", "medium", "high"];
const statuses = { All: "all", Active: "active", Completed: "completed" };

export const filters = {
  availableColors,
  priorities,
  statuses,
};

const initialState = {
  status: filters.statuses.All,
  colors: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    statusFilterChanged(state, action) {
      state.status = action.payload;
    },
    colorFilterChanged: {
      reducer(state, action) {
        let { color, changeType } = action.payload;
        const { colors } = state;
        switch (changeType) {
          case "added": {
            if (!colors.includes(color)) colors.push(color);
            break;
          }
          case "removed": {
            state.colors = colors.filter(
              (existingColor) => existingColor !== color
            );
            break;
          }
          default:
            return;
        }
      },
      prepare(color, changeType) {
        return { payload: { color, changeType } };
      },
    },
  },
});

export const { statusFilterChanged, colorFilterChanged } = filtersSlice.actions;
export default filtersSlice.reducer;
