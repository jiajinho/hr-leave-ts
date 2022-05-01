import type { Department, User } from "./types";

const departments: Department[] = [
  {
    id: "1",
    display: 'Finance'
  },
  {
    id: "2",
    display: 'SCM'
  },
  {
    id: "3",
    display: 'Accounting'
  },
  {
    id: "4",
    display: 'Software'
  },
  {
    id: "5",
    display: 'Warehouse'
  },
  {
    id: "6",
    display: 'HR'
  },
  {
    id: "7",
    display: 'CRM'
  },
  {
    id: "8",
    display: 'Marketing'
  }
];

const users: User[] = [
  {
    id: "1",
    name: "Arlent McCoy",
    department: "Marketing",
    supervisor: "James Bond",
    email: "sample@email.com",
    phoneNo: "12345667",
    status: "Contract",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/72.jpg"
  },
  {
    id: "2",
    name: "Esther Howard",
    department: "Warehouse",
    supervisor: "James Bond",
    email: "sample@email.com",
    phoneNo: "12346346",
    status: "Contract",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/71.jpg"
  },
  {
    id: "3",
    name: "Savannah Nguyen",
    department: "Finance",
    supervisor: "James Bond",
    email: "sample@email.com",
    phoneNo: "12346346",
    status: "Contract",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/21.jpg"
  },
  {
    id: "4",
    name: "Kristin Watson",
    department: "Finance",
    supervisor: "James Bond",
    email: "sample@email.com",
    phoneNo: "12346346",
    status: "Contract",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/41.jpg"
  },
  {
    id: "5",
    name: "Devon Lane",
    department: "Software",
    supervisor: "James Bond",
    email: "sample@email.com",
    phoneNo: "34556789",
    status: "Regular",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/35.jpg"
  },
  {
    id: "6",
    name: "Courtney Henry",
    department: "Warehouse",
    supervisor: "James Bond",
    email: "sample@email.com",
    phoneNo: "12346346",
    status: "Contract",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/11.jpg"
  },
  {
    id: "7",
    name: "Jacob Jones",
    department: "SCM",
    supervisor: "James Bond",
    email: "sample@email.com",
    phoneNo: "12341646",
    status: "Contract",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/45.jpg"
  },
  {
    id: "8",
    name: "Grace Lily",
    department: "Warehouse",
    supervisor: "James Bond",
    email: "sample@email.com",
    phoneNo: "97897123",
    status: "Regular",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/55.jpg"
  },
]

export default {
  departments,
  users
}