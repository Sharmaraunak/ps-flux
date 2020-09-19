import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "green" };
  return (
    <nav>
      {" "}
      <NavLink activeStyle={activeStyle} to="/" exact className="">
        Home
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="courses">
        Courses
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="about">
        About
      </NavLink>
    </nav>
  );
};

export default Header;
