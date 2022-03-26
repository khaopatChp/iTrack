import React, {useState} from 'react';
import './Add_Activity.css';
import PropTypes from 'prop-types';


function AddActivity({addPost}) {
  const [input, setInput] = useState('');

  function onChange(e) {
      setInput(e.target.value);
  }

  function onKeyDown(e) {
      const title = e.target.value;

      if (e.key === 'Enter' && title) {
          addPost(title);
          setInput('');
      }
  }


  return (
    <div className="Add_Activity">
        <input className='InputName' type="text" value={input} onChange={onChange} onKeyDown={onKeyDown} />
        <br/>
        <button className="SubmitButton" >SUBMIT</button>
    </div>
  );
}

AddActivity.prototype ={
  addCard: PropTypes.func.isRequired
};

export default AddActivity;