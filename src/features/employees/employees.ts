import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initEmployees } from './data'
import { Employee } from './types'

export interface EmployeesState {
  employees: Partial<Employee>[]
}

const initialState: EmployeesState = {
  employees: initEmployees,
}

export const employeesSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addEmployee: (
      state: EmployeesState,
      action: PayloadAction<Partial<Employee>>
    ) => {
      state.employees.push(action.payload)
    },
  },
})

export const { addEmployee } = employeesSlice.actions

export default employeesSlice.reducer
