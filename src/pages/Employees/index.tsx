import { UserPlus } from 'lucide-react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Title from '../../components/Title'
import useDocumentTitle from '../../hooks/useDocumentTitle'

import { EmployeesState } from '../../features/employees/employeesStore'

const Employees = () => {
  const employees = useSelector((state: EmployeesState) => state.employees)
  useDocumentTitle('Employees')

  console.log(employees)

  return (
    <>
      <section className="flex flex-row items-center gap-4">
        <Title>Current Employees</Title>
        <NavLink
          className="flex items-center gap-2 btn-primary "
          to="/employees/add"
        >
          <UserPlus strokeWidth={1.5} />
          Add employee
        </NavLink>
      </section>
      <section></section>
    </>
  )
}

export default Employees
