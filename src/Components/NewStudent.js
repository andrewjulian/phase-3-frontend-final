import React, {useState} from 'react'

const NewStudent = ({addNewStudent}) => {

  const [studentName, setStudentName] = useState("")
  const [studentGradeLevel, setStudentGradeLevel] = useState("")

  function handleNameChange(event){
    setStudentName(event.target.value)
  }

  function handleGradeChange(event){
    setStudentGradeLevel(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault();

    fetch("http://localhost:9292/new-student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: studentName,
        grade_level: studentGradeLevel
      }),
    })

    .then((r) => r.json())
    .then((data) => {
      addNewStudent(data);
    });

    setStudentName("");
    setStudentGradeLevel("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Name:
          <input type="text" value={studentName} onChange={handleNameChange} />
        </label>
        <br/>
        <br/>
        <label>
          GradeLevel:
          <input type="integer" value={studentGradeLevel} onChange={handleGradeChange} />
        </label>
        <br/>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default NewStudent