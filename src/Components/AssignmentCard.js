import React from 'react'

const AssignmentCard = ({assignment, handleDeleteAssignment}) => {

  const {id, title, category, description, possible_points, earned_points, due_date } = assignment

  function handleDeleteClick() {
    fetch(`http://localhost:9292/assignments/${id}`, {
      method: "DELETE",
    });

    handleDeleteAssignment(id);
  }

  return (
    <div>
      <h2>{title}</h2>
      <h3>{category}</h3>
      <p>{description}</p>
      <p>Due Date: {due_date}</p>
      <p>Possible Points: {possible_points}</p>
      <p>Earned Points: {earned_points}</p>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  )
}

export default AssignmentCard