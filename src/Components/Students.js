import React from 'react'
import { Link, Outlet } from "react-router-dom";

const Students = () => {
  return (
    <div>
      <h1>Student View</h1>

      <nav>
        <Link to="/students/new-student" className="projects-nav">Add New Student</Link>
      </nav>

      <Outlet />

    </div>
  )
}

export default Students