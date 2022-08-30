import React from "react";
import ClassAssignmentCard from "./ClassAssignmentCard";

const ClassAssignments = ({assignments, onClassSelect, selectedClass}) => {

  const fullListOfClasses = assignments.map((assignment) => {
    return (
     assignment.category
    )
  });

  const abrevListOfClasses = [...new Set(fullListOfClasses)]

  const listOfClasses = abrevListOfClasses.map((category, id) => {
    return (
      <option key={id} value={category}>{category}</option>
    )
  });

  const classAssignments = assignments.filter(
    (assignment) => assignment.category == selectedClass
  );

  const displayClassAssignments = classAssignments.map(
    (assignment, id) => {
      return (
        <ClassAssignmentCard assignment={assignment} key={id} />
      );
    }
  );
  
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