import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import StudentAssignments from './Components/StudentAssignments';
import ClassAssignments from './Components/ClassAssignments';
import Assignments from './Components/Assignments';
import Home from "./Components/Home"
import AddItems from "./Components/AddItems"
import NewAssignment from "./Components/NewAssignment"
import NewStudent from './Components/NewStudent';

function App() {

  const [students, setStudents] = useState([]);
  const [assignments, setAssignments] = useState ([])
  const [selectedStudent, setSelectedStudent] = useState("None")
  const [selectedClass, setSelectedClass] = useState("None")

  useEffect(() => {
    fetch("http://localhost:9292/students")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      });
    fetch("http://localhost:9292/assignments")
      .then((response) => response.json())
      .then((data) => {
        setAssignments(data);
      });
  }, []);

  function addNewStudent(newStudent){
    const updatedStudentList = [...students, newStudent];
    setStudents(updatedStudentList)
  }

  function addNewAssignment(newAssignment){
    const updateAssignmentList = [...assignments, newAssignment]
    setAssignments(updateAssignmentList)
  }

  function onStudentSelect(event){
    setSelectedStudent(event.target.value)
  }

  function onClassSelect(event){
    setSelectedClass(event.target.value)
  }

  function handleDeleteAssignment(id) {
    const updatedAssignments = assignments.filter((assignment) => assignment.id !== id);
    setAssignments(updatedAssignments);
  }

  function handleUpdateAssignment(updatedAssignment) {
    const updatedAssignments = assignments.map((assignment) => {
      if (assignment.id === updatedAssignment.id) {
        return updatedAssignment;
      } else {
        return assignment;
      }
    });

    console.log("updated assignments", updatedAssignments)
    setAssignments(updatedAssignments);
  }

  return (
    <div className="App">

      <nav>
        <Link to="/home" className="navbar">Home</Link>
        <Link to="/assignments" className="navbar">Assignments</Link>
        <Link to="/add" className="navbar">Edit</Link>
      </nav>

      <Routes>

        <Route index element={<Home handleDeleteAssignment={handleDeleteAssignment} />}/>
        <Route path="home" element={<Home />}/>

        <Route path="assignments" element={<Assignments />}>
          <Route path="student" element={
            <StudentAssignments 
              students={students} 
              selectedStudent={selectedStudent} 
              assignments={assignments} 
              onStudentSelect={onStudentSelect}
              handleDeleteAssignment={handleDeleteAssignment}
              handleUpdateAssignment={handleUpdateAssignment}
            />
          }/>
          <Route path="class" element={
            <ClassAssignments 
              assignments={assignments}
              onClassSelect={onClassSelect}
              selectedClass={selectedClass}
            />
          }/>
        </Route>

        <Route path="/add" element={<AddItems />}>
          <Route path="new-student" element={
            <NewStudent addNewStudent={addNewStudent} />
          }/>
          <Route path="new-assignment" element={
            <NewAssignment students={students} addNewAssignment={addNewAssignment} />
          }/>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
