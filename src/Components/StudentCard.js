import React from 'react'
import "../index.css"

const StudentCard = ({student , onStudentSelect}) => {
  const {name, grade_level} = student
  
  return (
    <div>
      <button className="projectCardStyle" onClick={onStudentSelect}>
        <h3>Name: {name}</h3>
        <h5>Grade: {grade_level}</h5>
      </button>
    </div>
  )
}

export default StudentCard