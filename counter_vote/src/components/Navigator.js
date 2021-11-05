import React from "react";
import { NavLink } from "react-router-dom";
const Navigator = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">contact</NavLink>
      <NavLink to="/counter">counter</NavLink>
    </div>
  );
};

export default Navigator;
