import React from "react";
import { Route } from "react-router-dom";

import useNavStore from "./stores/useNavStore";
import type { Route as RouteType } from "./config/routes";

export function generateRoute(routes: { [k: string]: RouteType }, currentPath: string) {
  const nodes: React.ReactNode[] = [];

  Object.entries(routes).forEach(([, item]) => {
    // if (item.render) {
    if (item.render) {
      nodes.push(
        <Route
          key={item.render.url}
          path={item.render.url}
          element={item.render.component}
        />
      );

      if (item.render.url === currentPath) {
        const navigate = useNavStore.getState().navigate;
        navigate && navigate(item)
      }
    }

    if (item.routes) {
      const childNodes = generateRoute(item.routes, currentPath);
      nodes.push(...childNodes);
    }
    // }
  });

  return nodes;
}