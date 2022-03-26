import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Register from '../Register/Register';
import AddActivity from '../Activity/Activity';
import Activity from '../Activity/Activity';
import Login from '../Login/Login'


function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/register' element={<Register/>}/>
              <Route exact path='/activity' element={<Activity/>}/>
              <Route exact path='/add-activity' element={<AddActivity/>}/>
              <Route exact path='/login' element={<Login/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
