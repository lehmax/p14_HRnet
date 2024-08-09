import { FormEvent, useState } from 'react'
import * as RAC from 'react-aria-components'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { BriefcaseBusiness, CircleUserRound, House } from 'lucide-react'

import { DatePicker } from '../../components/DatePicker'
import { FieldError } from '../../components/FieldError'
import Fieldset from '../../components/Fieldset'
import { Modal } from '../../components/Modal'
import { Select, SelectItem } from '../../components/Select'
import { TextField } from '../../components/TextField'
import Title from '../../components/Title'
import { addEmployee } from '../../features/employees/employeesStore'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import { states } from '../../utils/states'

const AddEmployee = () => {
  useDocumentTitle('Add Employee')

  return (
    <>
      <section className="flex flex-row items-center gap-4">
        <Title>Add Employee</Title>
        <NavLink className="btn-secondary" to="/employees">
          Current employees
        </NavLink>
      </section>
      <section>
        <EmployeeForm />
      </section>
    </>
  )
}

const EmployeeForm = () => {
  const [isOpen, setOpen] = useState(false)
  const dispatch = useDispatch()

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const formValues: Record<string, any> = {}

    formData.forEach((value, key) => {
      formValues[key] = value
    })

    dispatch(addEmployee(formValues))
    setOpen(true)
    form.reset()
  }

  return (
    <>
      <RAC.Form onSubmit={onSubmit} className="flex flex-col">
        <Fieldset
          title="Personnal information"
          icon={<CircleUserRound className="text-indigo-500" />}
        >
          <div className="flex w-full gap-4">
            <TextField
              label="First Name"
              name="firstName"
              isRequired
              fullWidth={true}
            />
            <TextField
              label="Last Name"
              name="LastName"
              isRequired
              fullWidth={true}
            />
          </div>
          <DatePicker
            label="Date of Birth"
            name="dateOfBirth"
            id="date-of-birth"
            isRequired
          />
        </Fieldset>
        <Fieldset title="Address" icon={<House className="text-indigo-500" />}>
          <TextField label="Street" name="street" fullWidth={true} isRequired />
          <div className="flex items-center w-full gap-4">
            <TextField label="City" name="city" isRequired />
            <RAC.NumberField minValue={0} isRequired>
              <RAC.Label>ZipCode</RAC.Label>
              <RAC.Input className="flex items-center w-full px-3 py-2 border border-gray-200 rounded-md outline-none max-w-20 focus-visible:ring ring-indigo-500" />
              <FieldError />
            </RAC.NumberField>
          </div>
          <StatesSelect />
        </Fieldset>
        <Fieldset
          title="Professional information"
          icon={<BriefcaseBusiness className="text-indigo-500" />}
        >
          <DepartmentSelect />
          <DatePicker
            label="Start Date"
            name="startDate"
            id="start-date"
            isRequired
          />
        </Fieldset>
        <div className="right-0 place-self-end">
          <RAC.Button className="btn-primary" type="submit">
            Save
          </RAC.Button>
        </div>
      </RAC.Form>
      <Modal type="success" isOpen={isOpen} onOpenChange={setOpen}>
        <p className="text-lg font-bold">Employee Created!</p>
      </Modal>
    </>
  )
}

const StatesSelect = () => {
  const items = states.map(state => ({ ...state, id: state.abbreviation }))

  return (
    <Select
      isRequired
      label="State"
      name="state"
      id="state"
      items={items}
      placeholder="Select state"
    >
      {items.map(({ id, name }) => (
        <SelectItem key={id}>{name}</SelectItem>
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
      isRequired
      label="Department"
      name="department"
      id="department"
      items={items}
      placeholder="Select department"
    >
      {items.map(({ id, name }) => (
        <SelectItem key={id}>{name}</SelectItem>
      ))}
    </Select>
  )
}

export default AddEmployee
