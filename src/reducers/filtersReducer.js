import { createSlice } from '@reduxjs/toolkit'

const availableColors = ["Red", "Yellow", "Green", "Blue", "Orange", "Purple"]
const priorities = ['low', 'medium', 'high']
const statuses = { All: "all", Active: "active", Completed: "completed" }

export const filters = {
    availableColors,
    priorities,
    statuses,
}

const initialState = {
    status: filters.statuses.All,
    colors: []
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        statusFilterChanged(state, action) { state.status = action.payload },

    }
})

export const { statusFilterChanged } = filtersSlice.actions
export default filtersSlice.reducer