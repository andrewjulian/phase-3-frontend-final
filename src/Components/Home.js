import React from "react";
import StudentCard from "./StudentCard";


const home = ({students, onStudentSelect}) => {

  const listOfStudents = students.map((student, id) => {
    return (
      <StudentCard student={student} key={id}/>
    )
    });

  return (
    <div>
      <select onChange={onStudentSelect}>
        {listOfStudents}
      </select>
    </div>
  )
}

export default home