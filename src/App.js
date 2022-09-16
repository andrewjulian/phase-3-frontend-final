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

  function onStudentSelect(event){
    setSelectedStudent(event.target.value)
  }

  function addNewStudent(newStudent){
    const updatedStudentList = [...students, newStudent];
    setStudents(updatedStudentList)
  }

  //----------- {…student, assignments: […student.assignments, assignment]} ------

  function addNewAssignment(newAssignment){
  
    const updateAssignmentList = [...assignments, newAssignment]
    setAssignments(updateAssignmentList)

    const newStudentAssignmentObj = students.find(
      (student) => student.id == newAssignment.student_id
    );
    
    const updateStudentAssignments = {...newStudentAssignmentObj, assignments: [...newStudentAssignmentObj.assignments, newAssignment]}
    const updateAllStudents = students.map(student => student.id == newAssignment.student_id ? updateStudentAssignments : student)
 
    setStudents(updateAllStudents)
  }

  function handleDeleteAssignment(updatedStudentAssignments) {
    const updateAllAssignments = students.map((student) => student.id == updatedStudentAssignments.id ? updatedStudentAssignments : student) 
    setStudents(updateAllAssignments);
  }


  function handleUpdateAssignment(updatedStudent) {
    const updateAll = students.map((student) => student.id == updatedStudent.id ? updatedStudent : student)
    setStudents(updateAll); 
  }

  return (
    <div className="App">

      <nav>
        <Link to="/home" className="navbar">Home</Link>
        <Link to="/assignments" className="navbar">Assignments</Link>
        <Link to="/add" className="navbar">Edit</Link>
      </nav>

      <Routes>

        <Route index element={<Home />}/>
        <Route path="home" element={<Home />}/>

        <Route path="assignments" element={<Assignments />}>
          <Route path="student" element={
            <StudentAssignments 
              students={students} 
              fullAssignments={assignments}
              selectedStudent={selectedStudent} 
              onStudentSelect={onStudentSelect}
              handleDeleteAssignment={handleDeleteAssignment}
              handleUpdateAssignment={handleUpdateAssignment}
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
