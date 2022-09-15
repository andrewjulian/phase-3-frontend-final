import React from "react";
import StudentCard from "./StudentCard";
import AssignmentCard from "./AssignmentCard";

const studentAssignments = ({students, fullAssignments, selectedStudent, onStudentSelect, handleDeleteAssignment, handleUpdateAssignment}) => {
  
  const listOfStudents = students.map((student, id) => {
    return (
      <StudentCard student={student} key={id}/>
    )
  });

  let displayStudentAssignments;

  if(selectedStudent == "None"){
    displayStudentAssignments = fullAssignments.map((assignment,id) => {return (
      <AssignmentCard 
        assignment={assignment} 
        key={id} 
        handleDeleteAssignment={handleDeleteAssignment}
        handleUpdateAssignment={handleUpdateAssignment}
      />
    )})
  } else {
    const selectedStudentObj = students.find(
      (student) => student.id == selectedStudent
    );

    displayStudentAssignments = selectedStudentObj.assignments.map((assignment, id) => {
      return (
        <AssignmentCard 
          assignment={assignment} 
          key={id} 
          handleDeleteAssignment={handleDeleteAssignment}
          handleUpdateAssignment={handleUpdateAssignment}
        />
      )});

  }
  

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