export type Key = "tokenUser" | "orgId";

const localStorage: { [k in Key]: string } = {
  tokenUser: "tokenUser",
  orgId: "orgId"
}

export default localStorage;