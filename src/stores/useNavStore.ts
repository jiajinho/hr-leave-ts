import create from "zustand";
import type { NavigateFunction } from "react-router-dom";

import type { Route } from '../config/routes';
import routes from '../config/routes';

type NavStore = {
  navigate: NavigateFunction | undefined,
  setNavigate: (n: NavigateFunction | undefined) => void,

  current: Route,
  setCurrent: (c: Route) => void
}

export default create<NavStore>(set => ({
  navigate: undefined,
  setNavigate: n => set({ navigate: n }),

  current: routes[0],
  setCurrent: c => set({ current: c })
}));