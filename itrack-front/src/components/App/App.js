import React, {useState} from 'react';
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
import AddActivity from '../Add_Activity/Add_Activity';
import Activity from '../Activity/Activity';
import Login from '../Login/Login'

let id = 1;
function App() {
  const [posts, setPosts] = useState([]);

  function addPost(newPost) {
    setPosts([{ id, title: newPost }, ...posts]);
    id += 1;
  }

  function removePost(id) {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  }


  return (
    <Router>
      <div className="App">
          <Navbar />
          <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/register' element={<Register/>}/>
              <Route exact path='/activity' element={<Activity/>}/>
              <Route exact path='/add-activity' element={<AddActivity addPost={addPost}/>}/>
              <Route exact path='/login' element={<Login/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
