import React from 'react'
import { Link, Outlet } from "react-router-dom";

const AddItems = () => {
  return (
    <div>
      <h1>Add Items</h1>

      <nav>
        <Link to="/add/new-student" className="projects-nav">Add New Student</Link>
        <Link to="/add/new-assignment" className="projects-nav">Add New Assignment</Link>
      </nav>

      <Outlet />

    </div>
  )
}

export default AddItems