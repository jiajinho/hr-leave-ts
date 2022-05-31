import { useEffect } from "react";
import { useLocation, matchPath } from "react-router-dom";

import routes, { Route } from "config/routes";
import useNavStore from "stores/useNavStore";

/**
 * Set the currentRoute in useNavStore when there is params in url during refresh (F5),
 * this is due to react-router-dom miss match when there are params in url.
 */

/**
 * @param {string} http://localhost:3000/my-request/view/:id
 * @return {RegExp} ^http://localhost:3000/my-request/view/[\w|\d|-]+$
 */
function getRegex(url: string): RegExp {
  const splits = url.split("/");

  for (let i = 0; i < splits.length; i++) {
    if (splits[i].includes(":")) {
      splits[i] = "[\\w|\\d|-]+";
    }
  }

  let join = splits.join("/");
  join = `^${join}$`;

  return new RegExp(join);
}

function getRoute(routes: { [k: string]: Route }, targetUrl: string): Route | undefined {
  for (const [, v] of Object.entries(routes)) {
    if (v.render) {
      const regex = getRegex(v.render.url);

      if (regex.test(targetUrl)) {
        return v;
      }
    }

    if (v.routes) {
      const route: Route | undefined = getRoute(v.routes, targetUrl);
      if (route) return route;
    }
  }

  return undefined;
}

export default () => {
  const location = useLocation();

  const currentRoute = useNavStore(state => state.currentRoute);
  const setCurrentRoute = useNavStore(state => state.setCurrentRoute);

  const fixRoute = () => {
    const route = getRoute(routes, location.pathname);
    route && setCurrentRoute(route);
  }

  useEffect(() => {
    if (!currentRoute) {
      fixRoute();
    }
    else {
      const matchResult = matchPath(currentRoute.render.url, location.pathname);
      matchResult ?? fixRoute();
    }
  }, [location, currentRoute]);
}