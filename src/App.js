import './App.css';
import Home from "./Components/Home"

import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NavBar from './Components/NavBar';


function App() {

  const [students, setStudents] = useState([]);
  const [assignments, setAssignments] = useState ([])

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
    console.log(event.target.value)
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home students={students} onStudentSelect={onStudentSelect}/> } />
      </Routes>
    </div>
  );
}

export default App;
