import type { Department, Employee } from "./type";

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

const employees: Employee[] = [
  {
    id: "1",
    name: "Rebecca"
  },
  {
    id: "2",
    name: "Khan"
  },
  {
    id: "3",
    name: "John"
  },
  {
    id: "4",
    name: "Ahmed"
  },
  {
    id: "5",
    name: "William"
  },
  {
    id: "6",
    name: "Anna"
  },
  {
    id: "7",
    name: "Riley"
  },
]

export default {
  departments,
  employees
};