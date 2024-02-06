import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Weather from './components/Weather'

function App() {
  return (
    <Router>
      < Navbar/>
      <Weather/>
    </Router>
  );
}

export default App;
