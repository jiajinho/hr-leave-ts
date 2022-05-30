import { LeaveBalance } from "./types";

const balance: LeaveBalance[] = [
  {
    id: "bb1fcea0-18c5-4561-9b3e-15a8871e17cf",
    username: "Watson",
    department: "Finance",
    annualEntitlement: 19,
    currentBalance: 87,
    consumed: 94,
    totalCurrentBalance: 83,
    projectedBalance: 15
  },
  {
    id: "a66e5593-27c4-4a47-9273-7327464cc6e7",
    username: "Swiss",
    department: "Finance",
    annualEntitlement: 19,
    currentBalance: 87,
    consumed: 94,
    totalCurrentBalance: 83,
    projectedBalance: 15
  },
  {
    id: "81af5b48-afa7-4160-8ad0-7bf55e079ea1",
    username: "Nick",
    department: "Finance",
    annualEntitlement: 19,
    currentBalance: 87,
    consumed: 94,
    totalCurrentBalance: 83,
    projectedBalance: 15
  },
  {
    id: "ae470741-fab5-42fb-af19-d2a41598b999",
    username: "Joey",
    department: "Finance",
    annualEntitlement: 19,
    currentBalance: 87,
    consumed: 94,
    totalCurrentBalance: 83,
    projectedBalance: 15
  },
  {
    id: "0338cc8c-3113-4ceb-b5cc-636af593a2ce",
    username: "Kruger",
    department: "Finance",
    annualEntitlement: 19,
    currentBalance: 87,
    consumed: 94,
    totalCurrentBalance: 83,
    projectedBalance: 15
  }
];

const type = [
  { id: "1", display: "Casual" },
  { id: "2", display: "Sick" },
  { id: "3", display: "Annual" },
  { id: "4", display: "Emergency" },
  { id: "5", display: "Medical" },
  { id: "6", display: "No Pay" },
]

export default {
  balance,
  type
};