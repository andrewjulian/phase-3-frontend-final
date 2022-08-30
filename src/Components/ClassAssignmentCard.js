import React from 'react'
import "../index.css";

const ClassAssignmentCard = ({assignment, handleDeleteAssignment, handleUpdateAssignment}) => {

  const {title, description, possible_points, due_date, student} = assignment

  return (
    <div className='classCardStyle'>
      <h3>{title} - {student.name}</h3>
      <p>{description}</p>
      <p>Due Date: {due_date}</p>
      <p>Possible Points: {possible_points}</p>
    </div>
  )
}

export default ClassAssignmentCard