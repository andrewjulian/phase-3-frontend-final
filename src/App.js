import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import StudentAssignments from './Components/StudentAssignments';
import ClassAssignments from './Components/ClassAssignments';
import Assignments from './Components/Assignments';
import Students from './Components/Students';
import Home from "./Components/Home"
//import NewAssignment from './Components/NewStudent';
import NewStudent from './Components/NewStudent';


function App() {

  const [students, setStudents] = useState([]);
  const [assignments, setAssignments] = useState ([])
  const [selectedStudent, setSelectedStudent] = useState("None")
  const [selectedClass, setSelectedClass] = useState("None")

  function addNewStudent(newStudent){
    console.log("Adding new student")
    const updatedStudentList = [...students, newStudent];
    setStudents(updatedStudentList)
  }

  useEffect(() => {
    fetch("http://localhost:9292/allStudents")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      });

    fetch("http://localhost:9292/allAssignments")
      .then((response) => response.json())
      .then((data) => {
        setAssignments(data);
      });

  }, []);

  function onStudentSelect(event){
    setSelectedStudent(event.target.value)
  }

  function onClassSelect(event){
    setSelectedClass(event.target.value)
  }

  const linkStyles = {
    display: "inline-block",
    padding: "12px",
    margin: "10px 6px 6px",
    background: "lightblue",
    textDecoration: "none",
    color: "black",
    textAlign: "center",
    borderRadius: "10px",
  };

  return (
    <div className="App">
      <nav>
        <Link to="/home" style={linkStyles}>Home</Link>
        <Link to="/assignments" style={linkStyles}>Assignments</Link>
        <Link to="/students" style={linkStyles}>Students</Link>
      </nav>

      <Routes>
        <Route index element={<Home />}/>
        <Route path="home" element={<Home />}/>
        <Route path="assignments" element={<Assignments />}>
          <Route path="student" element={
            <StudentAssignments 
              students={students} 
              selectedStudent={selectedStudent} 
              assignments={assignments} 
              onStudentSelect={onStudentSelect}
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
        <Route path="/students" element={<Students />}>
        <Route path="new-student" element={
            <NewStudent addNewStudent={addNewStudent} />
          }/>
        </Route>
        </Routes>
    </div>
  );
}

export default App;
