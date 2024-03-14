import { configureStore } from '@reduxjs/toolkit'
import todosSlice from './todoSlice'

export const store = configureStore({
  reducer: {
    [todosSlice.name]: todosSlice.reducer
  },
})