import { Menu } from "../../menu/Menu";
import "./menuLayout.css";

export const MenuLayout = (props) => {
  debugger;
  return (
    <div className={"container"}>
      <div className={"nav"}>
        <Menu />
      </div>
      <div className={"content"}>{props.children}</div>
    </div>
  );
};
