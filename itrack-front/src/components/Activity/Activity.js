import React, { useState, useEffect } from 'react';
import './Activity.css';
import axios from 'axios';
import HandleRemove from './CardData';

function Activity() {
  const [cardItems,setCardItems] = useState ([]);

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
  useEffect(() => {
    
    FetchData();
  }, []);

  const Removed = (id) => {
    axios
    .delete(`http://localhost:4000/users/me/records/${id}`)
    .then(() => {
    FetchData();
})
}

  return (
    <div className='card-center'>
      <div className="card-row">
        {cardItems.map((res, index) => {
          return <HandleRemove res={res} key={index} remove={() => {Removed(res._id)}}/>;
        })}
      </div>
    </div>
  );
}

export default Activity;