import { NavLink } from "react-router-dom";
import "./menu.css";

const menu = [
  {
    to: `/`,
    title: "about",
  },
  {
    to: `/header`,
    title: "header",
  },
  {
    to: `/footer`,
    title: "footer",
  },
];
export const Menu = () => {
  return (
    <div className={"menu"}>
      <ui>
        {menu.map((item) => {
          return (
            <li>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "link link_active" : "link"
                }
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ui>
    </div>
  );
};
