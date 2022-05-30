import React from "react";

import type { Route as RouteType } from "../../config/routes";
import type { Type as UserType } from "stores/useUserStore";

import useNavStore from "../../stores/useNavStore";
import useUserStore from "stores/useUserStore";

import Accordion from "./components/Accordion";

function checkIsRenderable(item: RouteType, userType: UserType): boolean {
  if (!item.display.sidebar) return false;

  if (!item.allowUsers) return true;

  return item.allowUsers.includes(userType);
}

export function generateAccordion(routes: { [k: string]: RouteType }) {
  const nodes: React.ReactNode[] = [];

  const userType = useUserStore.getState().type;
  const navigate = useNavStore.getState().navigate;
  const currentRoute = useNavStore.getState().currentRoute;

  Object.entries(routes).forEach(([, item], i) => {
    //Check renderable
    if (!checkIsRenderable(item, userType)) return;

    //Render
    let active = false;
    if (item.render && currentRoute && currentRoute.render) {
      const regex = item.render.url === "/" ?
        new RegExp("^\/$") :
        new RegExp(`^${item.render.url}`);

      active = regex.test(currentRoute.render.url);
    }

    let handleClick = navigate && item.render.component ?
      () => navigate(item) :
      undefined;

    nodes.push(
      <Accordion
        key={i}
        title={item.display.sidebar!}
        SVGElement={item.icon}
        onClick={handleClick}
        active={active}
      >
        {item.routes && generateAccordion(item.routes)}
      </Accordion>
    )
  });

  return nodes;
}