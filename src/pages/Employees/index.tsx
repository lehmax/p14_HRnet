import { NavLink } from 'react-router-dom'
import useDocumentTitle from '../../hooks/useDocumentTitle'

const Employees = () => {
  useDocumentTitle('Employees')

  return (
    <>
      <section>
        <h1>Current Employees</h1>
        <NavLink
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          to="/add-employee"
        >
          Add employee
        </NavLink>
      </section>
      <section></section>
    </>
  )
}

export default Employees
