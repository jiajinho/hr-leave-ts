export type LeaveBalance = {
  id: string,
  username: string,
  department: string,
  annualEntitlement: number,
  currentBalance: number,
  consumed: number,
  totalCurrentBalance: number,
  projectedBalance: number
}

export type Checks = { [k: string]: LeaveBalance }