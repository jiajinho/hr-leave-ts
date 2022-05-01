import create from "zustand";

import type { Route } from '../config/routes';

type StoreSchema = {
  navigate: ((r: Route, url?: string) => void) | undefined,
  setNavigate: (fn: (r: Route, url?: string) => void) => void,

  currentRoute: Route | undefined,
  setCurrentRoute: (c: Route) => void
}

export default create<StoreSchema>(set => ({
  navigate: undefined,
  setNavigate: fn => set({ navigate: fn }),

  currentRoute: undefined,
  setCurrentRoute: c => set({ currentRoute: c })
}));