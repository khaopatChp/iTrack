import React, {useState} from 'react';
import Model from './Model';

function HandleRemove ({res,remove,update,FetchData}) {
    let iconType;
    const [showModel, setShowModel] = useState(false);

    const openModel = () => {
      setShowModel(prev => !prev)
    }

    if (res.typeOfActivity === 'running'){
      iconType = <i className="fa-solid fa-person-running"></i>;
    }
    if (res.typeOfActivity === 'water'){
      iconType = <i className="fa-solid fa-person-swimming"></i>;
    }
    if (res.typeOfActivity === 'yoga'){
      iconType = <i className="fa-solid fa-hands-praying"></i>;
    }
    if (res.typeOfActivity === 'fitness'){
      iconType = <i className="fa-solid fa-dumbbell"></i>;
    }
    if (res.typeOfActivity === 'accessories'){
      iconType = <i className="fa-solid fa-volleyball"></i>;
    }

    return (
      <>
      <Model showModel={showModel} setShowModel = {setShowModel} update={update} id={res._id} res={res} FetchData={FetchData}/>
        <div className="card-main">
          
              <div className="card-element" >
                <div className="card-img">
                  <img src={res.img !== '' ? res.img : './act_1.avif'} width="100%"/>
                  <i className="fa-solid fa-xmark icon" onClick={remove}></i>
                  <i class="fa-solid fa-pen edit " onClick={openModel}></i>
                  
                </div>
                
                <div className='card-title' >
                  <div className='card-name'>
                    <h5>{res.date.slice(8,10)+"/"+res.date.slice(5,7)+"/"+res.date.slice(0,4)}</h5>
                    <h1>{res.activityName}</h1>
                    <p>{res.description}</p>
                  </div>
                  <div className='card-foot'>
                    <div className='card-food-icon'>
                      {iconType}
                    </div>
                    <h1>{res.duration}</h1>
                    <i className="fa-solid fa-share-nodes"></i>
                </div>
                </div>
              </div>
            </div>
      </>
    );
  }

  export default HandleRemove;