import React, { useState, useEffect } from 'react';
import './Activity.css';
import axios from 'axios';
import HandleRemove from './CardData';

function Activity() {
  const [cardItems,setCardItems] = useState ([]);
  
  useEffect(() => {
    async function FetchData() {
      await axios
        .get(`http://localhost:4000/users/me/records/`)
        .then((res) => { 
          setCardItems(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          Promise.reject(err);
        })
    }
    FetchData();
  }, []);

  return (
    <div className='card-center'>
      <div className="card-row">
        {cardItems.map((res, index) => {
          return <HandleRemove res={res} index={index}/>;
          {/*return(
            <div className="card-main" key={index}>
              <div className="card-element" >
                <button onClick={handleRemove}>X</button>
                <div className="card-img">
                  <img src='./act_1.avif' width="100%"/>
                </div>
                <div className='card-title' >
                  <div className='card-name'>
                    <h5>{item.timestamp}</h5>
                    <h1>{item.activityName}</h1>
                    <p>{item.description}</p>
                  </div>
                  <div className='card-foot'>
                    <i className="fa-solid fa-person-running"></i>
                    <h1>{item.calories}</h1>
                    <i className="fa-solid fa-share-nodes"></i>
                </div>
                </div>
              </div>
            </div>
              )*/}
        })}
      </div>
    </div>
  );
}


export default Activity;