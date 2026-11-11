interface Geolocation {
  lat: string
  long: string
}

interface Address {
  geolocation: Geolocation
  city: string
  street: string
  number: number
  zipcode: string
}

interface UserName {
  firstname: string
  lastname: string
}

export interface User {
  address: Address
  id: number
  email: string
  username: string
  password: string
  name: UserName
  phone: string
  __v: number
}
