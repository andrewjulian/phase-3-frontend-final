import React from 'react'
import "../index.css";
import { Link, Outlet } from "react-router-dom";

const Assignments = () => {
  return (
    <div>
      <h1>Assignment View</h1>

      <nav>
        <Link to="student-assignments" className="projects-nav">Assignments By Student</Link>
        <Link to="class-assignments" className="projects-nav">Assignments By Class</Link>
        <Link to="new-assignment" className="projects-nav">Create New Assignment</Link>
      </nav>

      <Outlet />
      
    </div>
  )
}

export default Assignments