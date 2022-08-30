import React, {useState} from 'react'

const AssignmentCard = ({assignment, handleDeleteAssignment, handleUpdateAssignment}) => {

  const {id, title, category, description, possible_points, earned_points, due_date, student} = assignment

  const [updateEP, setUpdateEP] = useState(0)

  function handleDeleteClick() {
    fetch(`http://localhost:9292/assignments/${id}`, {
      method: "DELETE",
    });

    handleDeleteAssignment(id);
  }

  

  function handleScoreUpdate(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/assignments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        earned_points: updateEP,
      }),
    })
      .then((r) => r.json())
      .then((data) => handleUpdateAssignment(data));

    setUpdateEP(0)
  }

  function updateScore(event){
    console.log("update score!")
    event.preventDefault()
    setUpdateEP(event.target.value)
  }

  return (
    <div>
      <h3>{student.name}</h3>
      <h2>{title}</h2>
      <h3>{category}</h3>
      <p>{description}</p>
      <p>Due Date: {due_date}</p>
      <p>Possible Points: {possible_points}</p>
      <p>Earned Points: {earned_points}</p>
      <form onSubmit={handleScoreUpdate}>
        <input type="integer" value={updateEP} onChange={updateScore}/>
        <input type="submit" value="Add/Update Score"/>
      </form>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  )
}

export default AssignmentCard