import { UserPlus } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import Title from '../../components/Title'
import useDocumentTitle from '../../hooks/useDocumentTitle'

import { useAppSelector } from '../../hooks'

const Employees = () => {
  const employees = useAppSelector(state => state.employees.data)
  useDocumentTitle('Employees')

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
