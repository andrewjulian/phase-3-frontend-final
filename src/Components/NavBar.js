import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

function NavBar() {
  

  return (
    <div>
      <NavLink to="/home" style={linkStyles}>
        Home
      </NavLink>
      <NavLink to="/assignments" style={linkStyles}>
        Assignments
      </NavLink>
      <NavLink to="/students" style={linkStyles}>
        Students
      </NavLink>
    </div>
  );
}

export default NavBar;