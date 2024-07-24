// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Location from './Location';
import Login from './Login';
import Registration from './Registration';
import ProblemStatements from './ProblemStatements';
import './App.css'; // Import your CSS files if needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/problem-statements" element={<ProblemStatements />} />
      </Routes>
    </Router>
  );
}

export default App;

