export type User = {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  contactNo: string,
  nationalId: string,
  dob: number,
  department: string,
  designation: string,
  reportTo: string,
  status: string,

  country: string,
  stateRegion: string,
  city: string,
  postalCode: string,
  address: string[],

  roles: string,
  permissions: string,

  workDays: string,
  thumbnail: string
}