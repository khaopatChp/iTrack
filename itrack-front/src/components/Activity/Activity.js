import React from 'react';
import './Activity.css';
import PropTypes from 'prop-types';

function Activity({id,title,removePost}) {
  return (
    <div className="Activity">
      <button className="Activity__delete" onClick={() => removePost(id)}>
        X
      </button>
      <div className='Activity__name'>{title}</div>
      <img
        className="Activity__image"
        src={`https://source.unsplash.com/random?sig=${id}`}
      />
    </div>
  );
}
Activity.prototype ={
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  removePost: PropTypes.func.isRequired
};

export default Activity;