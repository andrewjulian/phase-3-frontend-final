import React from "react";
import StudentCard from "./StudentCard";
import AssignmentCard from "./AssignmentCard";

const home = ({students, selectedStudent, onStudentSelect, assignments}) => {
  
  const listOfStudents = students.map((student, id) => {
    return (
      <StudentCard student={student} key={id}/>
    )
  });

  const studentAssignments = assignments.filter(
    (assignment) => assignment.student.name == selectedStudent
  );

  const displayStudentAssignments = studentAssignments.map(
    (assignment, id) => {
      return (
        <AssignmentCard assignment={assignment} key={id} />
      );
    }
  );

  return (
    <div>
      <select onChange={onStudentSelect} defaultValue="" >
        <option value="" disabled>Choose a Student...</option>
        {listOfStudents}
      </select>
      {displayStudentAssignments}
    </div>
  )
}

export default home