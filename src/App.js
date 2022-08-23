import './App.css';
import Home from "./Components/Home"

import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";


function App() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home students={students}/> } />
      </Routes>
    </div>
  );
}

export default App;
