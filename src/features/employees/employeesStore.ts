import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initEmployees } from './data'
import { Employee } from './types'

export interface EmployeesState {
  data: Partial<Employee>[]
}

const initialState: EmployeesState = {
  data: initEmployees,
}

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (
      state: EmployeesState,
      action: PayloadAction<Partial<Employee>>
    ) => {
      state.data.push(action.payload)
    },
  },
})

export const { addEmployee } = employeesSlice.actions

export default employeesSlice.reducer
