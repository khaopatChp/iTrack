import React from 'react';

function HandleRemove ({res,remove}) {
    return (
        <div className="card-main">
              <div className="card-element" >
                <div className="card-img">
                  <img src='./act_1.avif' width="100%"/>
                  <i className="fa-solid fa-xmark icon" onClick={remove}></i>
                </div>
                
                <div className='card-title' >
                  <div className='card-name'>
                    <h5>{res.timestamp.slice(8,10)+"/"+res.timestamp.slice(5,7)+"/"+res.timestamp.slice(0,4)}</h5>
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