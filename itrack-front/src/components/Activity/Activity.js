import React, { useState, useEffect } from 'react';
import './Activity.css';
import axios from 'axios';
import HandleRemove from './CardData';


function Activity() {
  const [cardItems,setCardItems] = useState ([]);
  const [num, setNum] = useState([]);

  async function FetchData() {
    await axios
      .get(`https://i-track-back.vercel.app/users/me/records/`)
      .then((res) => { 
        setCardItems(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        Promise.reject(err);
      })
  }

  cardItems.map((res, index) => {
    console.log(res.duration)
  })

 
  const calDuration = () => {
    setNum([...cardItems.map((res, index) => {
        return res.duration
    })], cardItems.map((res, index) => {
      return res.duration
    }))
  }

    let  reduce  = num && num.reduce((prev,cur) => prev + cur,0)
    
  useEffect(() => {
    FetchData();
    calDuration();
  }, []);


  const Removed = (id) => {
    axios
    .delete(`https://i-track-back.vercel.app/users/me/records/${id}`)
    .then(() => {
    FetchData();
})
}



  return (
    <div className='card-center'>
      <div className="card-row">
        {cardItems.map((res, index) => {
          return <HandleRemove res={res} key={index} remove={() => {Removed(res._id)} } FetchData={FetchData} />;
        })}
      </div>
    </div>
  );
}

export default Activity;