import React from "react";
import AssignmentCard from "./AssignmentCard";
import ClassCard from "./ClassCard";

const ClassAssignments = ({assignments, onClassSelect, selectedClass}) => {

  const listOfClasses = assignments.map((assignment, id) => {
    return (
      <ClassCard assignment={assignment} key={id}/>
    )
  });

  const classAssignments = assignments.filter(
    (assignment) => assignment.category == selectedClass
  );

  const displayClassAssignments = classAssignments.map(
    (assignment, id) => {
      return (
        <AssignmentCard assignment={assignment} key={id} />
      );
    }
  );

  
  return (
    <div>
      <select onChange={onClassSelect} defaultValue="" >
        <option value="" disabled>Choose a Class...</option>
        {listOfClasses}
      </select>
      {displayClassAssignments}
    </div>
  )
}

export default ClassAssignments