import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/countries">CountriesList</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
