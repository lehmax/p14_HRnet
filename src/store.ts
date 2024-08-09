import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from './features/employees/employeesStore'

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
})

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']
