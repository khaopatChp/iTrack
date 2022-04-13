import React, {useState} from 'react';
import './Add_Activity.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddActivity() {
  const [inputName, setInputName] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [inputType, setInputType] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [inputDuration, setInputDuration] = useState('');
  
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    let records = {
      activityName: inputName,
      timestamp: inputDate,
      duration: inputDuration,
      calories: 0,
      description: inputDescription,
    }
    axios
    .post(`http://localhost:4000/users/me/records/` ,records)
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
        <form onSubmit={handleSubmit}>
            <div className="inputbox">
              <input 
                className='input InputName' 
                id="name" 
                type="text" 
                onChange={e => setInputName(e.target.value)}
                required="required"
              />
              <span>Name</span>
            </div>
            <div className="inputbox" onChange={e => setInputType(e.target.value)}>
              <select id="type" name="type" required="required">
                        <option value="water">water sport</option>
                        <option value="indoor">indoor</option>
                        <option value="outdoor">outdoor</option>
                        <option value="gym">Audi</option>
              </select>
            </div>
            <div className='inputbox'>
                <input 
                  type="text" 
                  id="des" 
                  name="des"
                  required="required" 
                  onChange={e => setInputDescription(e.target.value)}
                />
                <span>Description</span>
            </div>
            <div className="inputbox">
                <input 
                  type="date" 
                  id="start"  
                  min="2018-01-01" 
                  max="2030-12-31" 
                  required="required"
                  onChange={e => setInputDate(e.target.value)}
                  />
            </div>
            <div className="inputbox">
                <input 
                  id="duration" 
                  type="number" 
                  name="duration" 
                  required="required"
                  onChange={e => setInputDuration(e.target.value)}
                />
                <span>Distance</span>
            </div>
              <button className="SubmitButton" onClick={handleSubmit}>SUBMIT</button>
          </form>
        </div>
    </div>
  );
}

AddActivity.prototype ={
  addCard: PropTypes.func.isRequired
};

export default AddActivity;