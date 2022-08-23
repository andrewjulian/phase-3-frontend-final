import React from "react";
import StudentCard from "./StudentCard";


const home = ({students, onStudentSelect}) => {

  const listOfStudents = students.map((student, id) => {
    return (
      <StudentCard student={student} key={id} onStudentSelect={onStudentSelect}/>
    )
    });

  return (
    <div>
      {listOfStudents}
    </div>
  )
}

export default home