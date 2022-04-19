import type { Route as RouteType } from "../../config/routes";

import useNavStore from "../../stores/useNavStore";
import Accordion from "./components/Accordion";

export function generateAccordion(routes: { [k: string]: RouteType }) {
  const nodes: React.ReactNode[] = [];

  const navigate = useNavStore.getState().navigate;

  Object.entries(routes).forEach(([, item], i) => {
    if (!item.display.sidebar) return;

    let handleClick = navigate ?
      () => navigate(item) :
      undefined;

    nodes.push(
      <Accordion
        key={i}
        title={item.display.sidebar}
        SVGElement={item.icon}
        onClick={handleClick}
      >
        {item.routes && generateAccordion(item.routes)}
      </Accordion>
    )
  });

  return nodes;
}