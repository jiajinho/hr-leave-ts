import create from "zustand";
import type { Key } from "config/localStorage";

type StoreSchema = { [k in Key]: string } & {
  setKey: (t: Key, v: string) => void
}

export default create<StoreSchema>(set => ({
  tokenUser: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmY0MTRiYjRkY2RiYTY4MTQ4NDlkMSIsImlhdCI6MTY1Mzg4Njc4NywiZXhwIjoxNjU2NDc4Nzg3fQ.0pQLX_29kerkbcYRknjIBxJln49RIYl1HBlzoJ6L65c",
  orgId: "U2FsdGVkX1/37Rfobg1BMh+uh2XLd4YRLfexyWLuXPg=",

  setKey: (t, v) => set(state => {
    const clone = { ...state };
    clone[t] = v;

    return clone;
  })
}));