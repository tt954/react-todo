import { createSlice } from '@reduxjs/toolkit'

const availableColors = ["Red", "Yellow", "Green", "Blue", "Orange", "Purple"]
const priorities = ['low', 'medium', 'high']

export const filters = {
    availableColors,
    priorities,
    All: 'all',
    Active: 'active',
    Completed: 'completed',
}

const initialState = {
    status: filters.All,
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