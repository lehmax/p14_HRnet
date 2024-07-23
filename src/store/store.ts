import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from '../features/employees/employees'

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
