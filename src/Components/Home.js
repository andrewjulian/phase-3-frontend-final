import React from "react";
import StudentCard from "./StudentCard";


const home = ({students}) => {

  const listOfStudents = students.map((student, id) => {
    return (
      <StudentCard student={student} key={id} />
    )
    });

  return (
    <div>
      {listOfStudents}
    </div>
  )
}

export default home