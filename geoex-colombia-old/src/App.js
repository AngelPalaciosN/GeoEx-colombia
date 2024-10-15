import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Inicio" element={<Home />} />
        <Route path="*" element={<Navigate to="/Inicio" />} />
      </Routes>
    </Router>
  );
}

export default App;
