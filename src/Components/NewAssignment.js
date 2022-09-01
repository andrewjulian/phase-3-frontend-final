import React, {useState} from 'react'
import StudentCard from './StudentCard'


const NewAssignment = ({students, addNewAssignment}) => {
  const [studentID, setStudentID] = useState("")
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [possiblePoints, setPossiblePoints] = useState(0)

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


  function handleStudentNameChange(event){
    setStudentID(event.target.value)
  }

  function handleTitleChange(event){
    setTitle(event.target.value)
  }

  function handleCategoryChange(event){
    setCategory(event.target.value)
  }

  function handleDescriptionChange(event){
    setDescription(event.target.value)
  }

  function handlePossiblePoints(event){
    setPossiblePoints(event.target.value)
  }

  const listofStudentNames = students.map((student, id) => {
    return (
      <StudentCard student={student} key={id}/>
    )
  });

  function handleSubmit(event){
    event.preventDefault();

    console.log("submitted")

    fetch("http://localhost:9292/assignments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        studentID: studentID,
        title: title,
        category: category,
        description: description,
        possible_points: possiblePoints,
        earned_points: 0,
        due_date: date
      }),
    })

    .then((r) => r.json())
    .then((data) => {
      addNewAssignment(data);
    });

    setStudentID("")
    setTitle("")
    setCategory("")
    setDescription("")
    setPossiblePoints(0)

  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <select onChange={handleStudentNameChange} defaultValue="" >
          <option value={studentID} disabled>Choose a Student...</option>
          {listofStudentNames}
        </select>
        <br/>
        <br/>
        <label>
          Assignment Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <br/>
        <br/>
        <label>
          Assignment Category:
          <select defaultValue="" onChange={handleCategoryChange}>
            <option value={category} disabled>Choose a Class...</option>
            <option value={"English"}>English</option>
            <option value={"Math"}>Math</option>
            <option value={"Science"}>Science</option>
            <option value={"History"}>History</option>
          </select>
        </label>
        <br/>
        <br/>
        <label>
          Assignment Description:
          <input type="text" value={description} onChange={handleDescriptionChange} />
        </label>
        <br/>
        <br/>
        <label>
          Assignment Possible Points:
          <input type="integer" value={possiblePoints} onChange={handlePossiblePoints} />
        </label>
        <br/>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default NewAssignment