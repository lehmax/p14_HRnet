type Address = {
  street: string
  city: string
  zipCode: string
  state: string
}

type Person = {
  firstName: string
  lastName: string
  dateOfBirth: string
}

type PersonWithAddress = Person & Address

export type Employee = PersonWithAddress & {
  id: number
  department: string
  startDate: string
}
