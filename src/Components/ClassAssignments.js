import React from "react";
import StudentCard from "./StudentCard";
import AssignmentCard from "./AssignmentCard";
import ClassCard from "./ClassCard";

const ClassAssignments = ({assignments, onClassSelect, selectedClass}) => {

  const listOfClasses = assignments.map((assignment, id) => {
    return (
      <ClassCard assignment={assignment} key={id}/>
    )
  });

  return (
    <div>
      <select onChange={onClassSelect} defaultValue="" >
        <option value="" disabled>Choose a Class...</option>
        {listOfClasses}
      </select>
    </div>
  )
}

export default ClassAssignments