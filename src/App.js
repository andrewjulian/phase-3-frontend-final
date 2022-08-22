import logo from './logo.svg';
import './App.css';

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
      
    </div>
  );
}

export default App;
