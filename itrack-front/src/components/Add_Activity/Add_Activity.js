import React, {useState} from 'react';
import './Add_Activity.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function AddActivity({addPost}) {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  function onChange(e) {
      setInput(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => {
      console.log("data: ", res.data);
      navigate({
        pathname: "/activity"
      });
    })
  }

  return (
    <div className="Add_Activity">
      <div className='Add_Activity_left'>
        <img src='./add_1.avif'/>
      </div>
      <div className='center Add_Activity_right'>
        <div className="title">
          <h1>Let's create your activity!</h1>
        </div>
        <form onSubmit={onSubmit}>
            <div class="inputbox">
              <input 
                className='input InputName' 
                id="name" 
                type="text" 
                onChange={onChange} 
                required="required"
              />
              <span>Name</span>
            </div>
            <div class="inputbox">
              <select id="cars" name="cars" required="required">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
              </select>
            </div>
            <div className='inputbox'>
                <input 
                  type="text" 
                  id="des" 
                  name="des"
                  required="required" 
                />
                <span>Description</span>
            </div>
            <div class="inputbox">
                <input type="date" id="start"  min="2018-01-01" max="2030-12-31" required="required"/>
            </div>
            <div class="inputbox">
                <input 
                  id="distance" 
                  type="number" 
                  name="distance" 
                  required="required"
                />
                <span>Distance</span>
            </div>
              <button className="SubmitButton">SUBMIT</button>
          </form>
        </div>
    </div>
  );
}

AddActivity.prototype ={
  addCard: PropTypes.func.isRequired
};

export default AddActivity;