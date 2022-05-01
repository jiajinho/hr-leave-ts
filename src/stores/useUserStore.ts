import create from "zustand";
import type { Type } from 'types/user';

type StoreSchema = {
  type: Type,
  setType: (u: Type) => void
}

export default create<StoreSchema>(set => ({
  type: "user",
  setType: u => set({ type: u })
}));