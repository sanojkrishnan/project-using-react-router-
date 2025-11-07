import React from "react";
import "./Header.css";
import PrivetLink from "./Links/PrivetLink";

function Header() {
  return (
    <div className="header">
      <PrivetLink to="/">
        <span>Home</span>
      </PrivetLink>{" "}
      {/**Link component is used to navigate between routes*/}
      <PrivetLink to="/settings">
        <span>Settings</span>
      </PrivetLink>
      <PrivetLink to="/usage">
        <span>Usage</span>
      </PrivetLink>
      <PrivetLink to="/users">
        <span>Users</span>
      </PrivetLink>
    </div>
  );
}

export default Header;
