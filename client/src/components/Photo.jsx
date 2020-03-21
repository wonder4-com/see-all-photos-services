/* eslint-disable camelcase */
import React from 'react';

const Photo = ({ photo, index }) => {

  return (
    <div>
      <div className="flex-container">
        <img className="image" alt="" src={photo.url_address} index={index} />
      </div>
    </div>
  );
};

export default Photo;
