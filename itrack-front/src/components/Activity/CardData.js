import axios from "axios";
import React from 'react';
import { useNavigate } from 'react-router-dom';

function HandleRemove ({res, index}) {
    const navigate = useNavigate();
    const Removed = (e) => {
        e.preventDefault();
        window.location.reload();
        axios
        .delete(`http://localhost:4000/users/me/records/${res._id}`)
        .then((res) => {
        navigate({
            pathname: "/activity"
        });
    })
    }

    return (
        <div className="card-main" key={res._id}>
              <div className="card-element" >
                <button onClick={Removed}>X</button>
                <div className="card-img">
                  <img src='./act_1.avif' width="100%"/>
                </div>
                <div className='card-title' >
                  <div className='card-name'>
                    <h5>{res.timestamp}</h5>
                    <h1>{res.activityName}</h1>
                    <p>{res.description}</p>
                  </div>
                  <div className='card-foot'>
                    <i className="fa-solid fa-person-running"></i>
                    <h1>{res.calories}</h1>
                    <i className="fa-solid fa-share-nodes"></i>
                </div>
                </div>
              </div>
            </div>
    );
  }

  export default HandleRemove;