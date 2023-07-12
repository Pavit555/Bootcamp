import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserForm from './UserForm';
import Navbar from './components';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import { Bars } from './components/NavbarElements';

function App() {
  return (
    <div className="container">
       <Router>
            <Navbar />
            <Bars />
        </Router>
      <UserForm />
    </div>
  );
}
export default App;
