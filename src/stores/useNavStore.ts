import create from "zustand";

import type { Route } from '../config/routes';

type NavStore = {
  navigate: ((r: Route, url?: string) => void) | undefined,
  setNavigate: (fn: (r: Route, url?: string) => void) => void,

  current: Route | undefined,
  setCurrent: (c: Route) => void
}

export default create<NavStore>(set => ({
  navigate: undefined,
  setNavigate: fn => set({ navigate: fn }),

  current: undefined,
  setCurrent: c => set({ current: c })
}));