import React from 'react'
import "../index.css";
import { Link, Outlet } from "react-router-dom";

const Assignments = () => {
  return (
    <div>
      <h1>Assignment View</h1>

      <nav>
        <Link to="/assignments/student" className="projects-nav">Assignments By Student</Link>
        {/* <Link to="/assignments/class" className="projects-nav">Assignments By Class</Link> */}
      </nav>

      <Outlet />

    </div>
  )
}

export default Assignments