import React from 'react';
import './App.css';
import Weather from './Weather';
import Navbar from './components';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import { Bars } from './components/NavbarElements';


function App() {
  return (
        <Router>
            <Navbar />
            <Bars />
            <Weather />
        </Router>
  );
}

export default App;
