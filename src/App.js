import React from 'react'
import Navbar from './components/index.js'
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import LoginForm from './components/Login/index.js';
import CreateAcount from './components/Login/CreateAcount'
function App() {
  return (
    <Router> 
      <Navbar/>
      <div className="loginscreen">
        <div className="loginform"><LoginForm/>
        </div>
        
        <div className="createAcount">
          <CreateAcount/>
        </div>
      </div>
    </Router>
  );
}

export default App;
