import { filters } from '../reducers/filtersReducer'

export const generateRandomColor = () => {
    return filters.availableColors[[Math.floor(Math.random() * filters.availableColors.length)]]
}

export const capitalize = s => s[0].toUpperCase + s.slice(1) 