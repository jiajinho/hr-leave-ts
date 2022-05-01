import create from "zustand";

export type Type = "admin" | "user";

type StoreSchema = {
  type: Type,
  setType: (u: Type) => void
}

export default create<StoreSchema>(set => ({
  type: "user",
  setType: u => set({ type: u })
}));