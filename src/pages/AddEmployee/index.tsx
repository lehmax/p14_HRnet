import { FormEvent } from 'react'
import { NavLink } from 'react-router-dom'

const AddEmployee = () => (
  <>
    <section>
      <h1>Add Employee</h1>
      <NavLink
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        to="/employees"
      >
        Current employees
      </NavLink>
    </section>
    <section>
      <EmployeeForm />
    </section>
  </>
)

const EmployeeForm = () => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <>
      <form onSubmit={onSubmit} action="#" id="create-employee">
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" />

        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <input id="date-of-birth" type="text" />

        <label htmlFor="start-date">Start Date</label>
        <input id="start-date" type="text" />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" type="text" />

          <label htmlFor="city">City</label>
          <input id="city" type="text" />

          <label htmlFor="state">State</label>
          <select name="state" id="state"></select>

          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="number" />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select name="department" id="department">
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
      </form>
      <button
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        type="submit"
      >
        Save
      </button>
    </>
  )
}

export default AddEmployee
