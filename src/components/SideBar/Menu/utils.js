import { Menu } from "antd"
import { SubMenu } from "./styled";

const { Item } = Menu;

/**
 * @param routes Route[]
 * @return JSX.Element[]
 * 
 * This is a recursive function, takes config data and generate JSX output. 'display' key
 * omitted for demo purpose. Example:
 * @input [
 *  { key: 1, routes: [{key: 2}, {key: 3}] },
 *  { key: 4 } 
 * ]
 * 
 * @output
 *  <SubMenu key=1>
 *    <Item key=2 />
 *    <Item key=3 /> 
 *  </SubMenu>
 * 
 *  <Item key=4 />
 */
export const generateMenu = (routes) => {

  const nodes = []; //JSX.Element[]

  routes.forEach(route => {
    if (route.routes) {
      let childNodes = []; //JSX.Element[]
      childNodes.push(generateMenu(route.routes));

      nodes.push(
        <SubMenu key={route.key} title={route.display}>
          {childNodes}
        </SubMenu>
      );
    }
    else {
      nodes.push(
        <Item key={route.key}>
          {route.display}
        </Item>
      );
    }
  });

  return nodes;
}