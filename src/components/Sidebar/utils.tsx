import type { Route as RouteType } from "../../config/routes";

import useNavStore from "../../stores/useNavStore";
import Accordion from "./components/Accordion";

export function generateAccordion(routes: RouteType[]) {
  const nodes: React.ReactNode[] = [];

  const navigate = useNavStore.getState().navigate;
  const setCurrent = useNavStore.getState().setCurrent;

  routes.forEach((item, i) => {

    let handleClick = undefined;

    if (item.render && navigate) {
      handleClick = () => {
        navigate(item.render!.url);
        setCurrent(item);
      }
    }

    nodes.push(
      <Accordion
        key={i}
        title={item.display.sidebar}
        SVGElement={item.icon}
        onClick={handleClick}
      >
        {item.routes &&
          <>
            {generateAccordion(item.routes).map((item, j) =>
              <div key={j}>
                {item}
              </div>
            )}
          </>
        }
      </Accordion>
    )
  });

  return nodes;
}