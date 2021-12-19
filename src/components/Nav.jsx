import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="menu">
      <NavLink
        className={({ isActive }) =>
          isActive ? "menu__link menu__link--active" : "menu__link"
        }
        to="/"
      >
        Úvod
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "menu__link menu__link--active" : "menu__link"
        }
        to="/create"
      >
        Vytvořit přáníčko
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "menu__link menu__link--active" : "menu__link"
        }
        to="/get"
      >
        Vyzvednout
      </NavLink>
    </nav>
  );
};
