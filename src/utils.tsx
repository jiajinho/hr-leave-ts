import React from "react";
import { Route } from "react-router-dom";

import type { Route as RouteType } from "./config/routes";

export function generateRoute(routes: RouteType[]) {
  const nodes: React.ReactNode[] = [];

  routes.forEach((item) => {
    if (item.render) {
      nodes.push(
        <Route
          key={item.render.url}
          path={item.render.url}
          element={item.render.component}
        />
      );
    }

    if (item.routes) {
      const childNodes = generateRoute(item.routes);
      nodes.push(...childNodes);
    }
  });

  return nodes;
}