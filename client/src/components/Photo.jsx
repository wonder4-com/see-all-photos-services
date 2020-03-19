/* eslint-disable camelcase */
import React from 'react';

const Photo = ({ photo }) => {

  return (
    <div>
      <div className="flex-container">
        <img className="image" alt="" src={photo.url_address} index={photo.index}/>
      </div>
    </div>
  );
};

export default Photo;
