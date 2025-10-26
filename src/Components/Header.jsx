import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <NavLink to="/">
        <span>Home</span>
      </NavLink>{" "}
      {/**Link component is used to navigate between routes*/}
      <NavLink to="settings">
        <span>Settings</span>
      </NavLink>
      <NavLink to="usage">
        <span>Usage</span>
      </NavLink>
      <NavLink to="users">
        <span>Users</span>
      </NavLink>
    </div>
  );
}

export default Header;
