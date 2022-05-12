import type { User } from "./types";

const departments = [
  { id: "1", display: "Finance" },
  { id: "2", display: "CRM" },
  { id: "3", display: "HR" },
  { id: "4", display: "SCM" },
  { id: "5", display: "Accounting" },
  { id: "6", display: "IT" },
  { id: "7", display: "Engineer" },
]

const users: User[] = [
  {
    id: "a8bb2404-bf72-4960-bceb-c86c8641b0d0",
    firstName: "Arlent",
    lastName: "McCoy",
    email: "sample@email.com",
    contactNo: "12345667",
    nationalId: "Singaporean",
    dob: 1652337879,
    department: "Marketing",
    designation: "Team Lead",
    reportTo: "James Bond",
    status: "Contract",

    country: "Singapore",
    stateRegion: "West Region",
    city: "Jurong West",
    postalCode: "610005",
    address: [
      "414 Jurong West Street 42, Singapore 640414"
    ],

    roles: "Normal User",
    permissions: "Change Leave Balance",

    workDays: "Mon - Fri",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/72.jpg"
  },
  {
    id: "c4996f3d-8f21-4272-901b-6ded99c119c3",
    firstName: "Jasmine",
    lastName: "Tookes",
    email: "jasmine@email.com",
    contactNo: "12345667",
    nationalId: "Singaporean",
    dob: 1652337879,
    department: "Marketing",
    designation: "Team Lead",
    reportTo: "Willy Wilde",
    status: "Contract",

    country: "Singapore",
    stateRegion: "West Region",
    city: "Jurong West",
    postalCode: "610005",
    address: [
      "414 Jurong West Street 42, Singapore 640414"
    ],

    roles: "Normal User",
    permissions: "Change Leave Balance",

    workDays: "Mon - Fri",
    thumbnail: "https://randomuser.me/api/portraits/thumb/women/72.jpg"
  },
]

export default {
  departments,
  users
};