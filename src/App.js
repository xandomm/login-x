import React from 'react'
import Navbar from './components/index.js'
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import Login from './components/Login/index.js';

function App() {
  return (
    <Router>
      <Navbar/>
      <Login/>
    </Router>
  );
}

export default App;
