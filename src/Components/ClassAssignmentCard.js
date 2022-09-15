import React from 'react'
import "../index.css";

const ClassAssignmentCard = ({assignment}) => {

  console.log('assignment', assignment)

  const {title, description, due_date, possible_points} = assignment

  return (
    <div className='classCardStyle'>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Due Date: {due_date}</p>
      <p>Possible Points: {possible_points}</p>
    </div>
  )
}

export default ClassAssignmentCard