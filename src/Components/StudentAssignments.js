import React from "react";
import StudentCard from "./StudentCard";
import AssignmentCard from "./AssignmentCard";

const studentAssignments = ({students, selectedStudent, onStudentSelect, handleDeleteAssignment, handleUpdateAssignment}) => {
  
  const listOfStudents = students.map((student, id) => {
    return (
      <StudentCard student={student} key={id}/>
    )
  });

  const selectedStudentObj = students.filter(
    (student) => student.id == selectedStudent
  );

  console.log("student assignments", selectedStudentObj)

  const displayStudentAssignments = selectedStudentObj.map((student) => 
    student.assignments.map((assignment, id) => {
      return (
        <AssignmentCard 
          assignment={assignment} 
          key={id} 
          handleDeleteAssignment={handleDeleteAssignment}
          handleUpdateAssignment={handleUpdateAssignment}
        />
      );
    })
  );

  return (
    <div>
      <select onChange={onStudentSelect} defaultValue="" >
        <option value="" disabled>Choose a Student...</option>
        {listOfStudents}
      </select>
      <br/>
      <br/>
      {displayStudentAssignments}
    </div>
  )
}

export default studentAssignments