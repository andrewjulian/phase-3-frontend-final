import React from 'react'

const AssignmentCard = ({assignment}) => {

  const {title, category, description, possible_points, earned_points, due_date } = assignment

  return (
    <div>
      <h2>{title}</h2>
      <h3>{category}</h3>
      <p>{description}</p>
      <p>Due Date: {due_date}</p>
      <p>Possible Points: {possible_points}</p>
      <p>Earned Points: {earned_points}</p>
    </div>
  )
}

export default AssignmentCard