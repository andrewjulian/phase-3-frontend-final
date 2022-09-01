import React from 'react'

const home = () => {

  return (
    <div>
      <h1>Home Page</h1>
      <div className="homePageCard">
        <h2>Application Overview</h2>
        <p>This application is a student and assignment management system where a teacher can add assignments and students to a database and then sort through the assignments by class or student and upate the score for the assignment.</p>
        <h3>Assignments Option</h3>
        <p>The assignments option allows you to browse created assignments by student or class.</p>
        <br/>
        <h3>Edit Option</h3>
        <p>The edit option provides options for adding a new student or new assignment</p>
      </div>
    </div>
  )
}

export default home