import './App.css';
import Home from "./Components/Home"

import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NavBar from './Components/NavBar';


function App() {

  const [students, setStudents] = useState([]);
  const [assignments, setAssignments] = useState ([])
  const [selectedStudent, setSelectedStudent] = useState("None")

  console.log(selectedStudent)

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

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home students={students} selectedStudent={selectedStudent} assignments={assignments} onStudentSelect={onStudentSelect}/> } />
      </Routes>
    </div>
  );
}

export default App;
