export interface Address {
  street: string
  city: string
  zipCode: string
  state: string
}

interface Person {
  firstName: string
  lastName: string
  dateOfBirth: string
  address: Partial<Address>
}

export interface Employee extends Person {
  department: string
  startDate: string
}
