import React from "react";
import ClassAssignmentCard from "./ClassAssignmentCard";

const ClassAssignments = ({students, onClassSelect, selectedClass}) => {

const fullListOfClasses = students.map((student) => student.assignments.map((assignment) => {
  return (
    assignment.category
  )}));

  const removeEmpty = fullListOfClasses.filter(content => content.length)
  const abrevListOfClasses = [...new Set(removeEmpty)]
  const listOfClasses = abrevListOfClasses.map((category, id) => {
    return (
      <option key={id} value={category}>{category}</option>
    )
  });


  const classAssignments = students.map((student) => student.assignments.filter((assignment) => assignment.category == selectedClass));
  const removeEmptyAssignments = classAssignments.filter(content=>content.length)
  const displayClassAssignments = removeEmptyAssignments.map((assignments) => assignments.map(
    (assignment, id) => {
      return (
        <ClassAssignmentCard assignment={assignment} key={id} />
      );
    }
  ));
  
  return (
    <div>
      <select onChange={onClassSelect} defaultValue="" >
        <option value="" disabled>Choose a Class...</option>
        {listOfClasses}
      </select>
      <br/>
      <br/>
      {displayClassAssignments}
    </div>
  )
}

export default ClassAssignments