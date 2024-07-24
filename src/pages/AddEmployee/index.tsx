import { FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { Select, SelectItem } from '../../components/Select'
import Title from '../../components/Title'
import { addEmployee } from '../../features/employees/employees'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import { states } from '../../utils/states'

const AddEmployee = () => {
  useDocumentTitle('Add Employee')

  return (
    <>
      <section className="flex flex-row items-center gap-4">
        <Title>Add Employee</Title>
        <NavLink className="btn-primary" to="/employees">
          Current employees
        </NavLink>
      </section>
      <section>
        <EmployeeForm />
      </section>
    </>
  )
}

interface FormValues extends Record<string, string | object> {
  address: Record<string, string>
}

const EmployeeForm = () => {
  const dispatch = useDispatch()

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const formValues: FormValues = { address: {} }

    formData.forEach((value, key) => {
      if (['state', 'street', 'zipCode', 'city'].includes(key)) {
        formValues.address[key] = value.toString()
      } else {
        formValues[key] = value.toString()
      }
    })

    dispatch(addEmployee(formValues))
  }

  return (
    <>
      <form
        onSubmit={onSubmit}
        action="#"
        id="create-employee"
        className="max-w-[66%] flex flex-col gap-4"
      >
        <div className="flex w-full gap-4">
          <div className="w-full">
            <label htmlFor="first-name">First Name</label>
            <input type="text" name="firstName" id="first-name" />
          </div>
          <div className="w-full">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" name="lastName" id="last-name" />
          </div>
        </div>
        <div>
          <label htmlFor="date-of-birth">Date of Birth</label>
          <input id="date-of-birth" name="dateOfBirth" type="text" />
        </div>
        <div>
          <label htmlFor="start-date">Start Date</label>
          <input id="start-date" name="startDate" type="text" />
        </div>

        <fieldset className="address">
          <legend>Address</legend>

          <div>
            <label htmlFor="street">Street</label>
            <input id="street" name="street" type="text" />
          </div>

          <div className="flex items-center w-full gap-4">
            <div className="w-full">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" />
            </div>

            <div>
              <label htmlFor="zip-code">Zip Code</label>
              <input id="zip-code" name="zipCode" type="number" />
            </div>

            <div className="w-full">
              <StatesSelect />
            </div>
          </div>
        </fieldset>

        <div>
          <DepartmentSelect />
        </div>

        <div>
          <button className="btn-primary" type="submit">
            Save
          </button>
        </div>
      </form>
    </>
  )
}

const StatesSelect = () => {
  const items = states.map(state => ({ ...state, id: state.abbreviation }))

  return (
    <Select
      label="State"
      name="state"
      id="state"
      items={items}
      placeholder="Select state"
    >
      {items.map(({ name }) => (
        <SelectItem>{name}</SelectItem>
      ))}
    </Select>
  )
}

const DepartmentSelect = () => {
  const items = [
    { id: 'sales', name: 'Sales' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'human-resources', name: 'Human Resources' },
    { id: 'legal', name: 'Legal' },
  ]

  return (
    <Select
      label="Department"
      name="department"
      id="department"
      items={items}
      placeholder="Select department"
    >
      {items.map(({ name }) => (
        <SelectItem>{name}</SelectItem>
      ))}
    </Select>
  )
}

export default AddEmployee
