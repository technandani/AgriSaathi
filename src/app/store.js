import { configureStore } from '@reduxjs/toolkit'
import sliderSlice from '../features/sliderSlice'

export const store = configureStore({
  reducer: sliderSlice
})