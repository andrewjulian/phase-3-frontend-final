import React from "react";
import StudentCard from "./StudentCard";
import AssignmentCard from "./AssignmentCard";

const studentAssignments = ({students, selectedStudent, onStudentSelect, assignments, handleDeleteAssignment, handleUpdateAssignment}) => {
  
  const listOfStudents = students.map((student, id) => {
    return (
      <StudentCard student={student} key={id}/>
    )
  });

  const studentAssignments = assignments.filter(
    (assignment) => assignment.student.id == selectedStudent
  );

  const displayStudentAssignments = studentAssignments.map(
    (assignment, id) => {
      return (
        <AssignmentCard 
          assignment={assignment} 
          key={id} 
          handleDeleteAssignment={handleDeleteAssignment}
          handleUpdateAssignment={handleUpdateAssignment}
        />
      );
    }
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