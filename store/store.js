import { configureStore } from '@reduxjs/toolkit'
import favReducer from './favDataSlice'

export const store = configureStore({
  reducer: {
    favData: favReducer,
  },
})
