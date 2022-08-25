import './App.css';

import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NavBar from './Components/NavBar';
import StudentAssignments from './Components/StudentAssignments';
import ClassAssignments from './Components/ClassAssignments';
import Assignments from './Components/Assignments';
import Students from './Components/Students';
import Home from "./Components/Home"


function App() {

  const [students, setStudents] = useState([]);
  const [assignments, setAssignments] = useState ([])
  const [selectedStudent, setSelectedStudent] = useState("None")
  const [selectedClass, setSelectedClass] = useState("None")

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

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/assignments" element={<Assignments />}>
          
          <Route path="student-assignments" element={
            <StudentAssignments 
              students={students} 
              selectedStudent={selectedStudent} 
              assignments={assignments} 
              onStudentSelect={onStudentSelect}
            />
          }/>

          <Route path="class-assignments" element={
            <ClassAssignments
              assignments={assignments} 
              onClassSelect={onClassSelect}
              selectedClass={selectedClass}
            />
          }/>
          
          <Route path="new-assignment" element={
            <StudentAssignments 
              students={students} 
              selectedStudent={selectedStudent} 
              assignments={assignments} 
              onStudentSelect={onStudentSelect}
            />
          }/>


        </Route>
        <Route path="/students" element={<Students />} /> 
        </Routes>
    </div>
  );
}

export default App;
