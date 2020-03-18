import React from 'react';
import Photo from './Photo.jsx';

const PhotoCard = ({ photos }) => {
 
  return (
    <div className="cards-slider">
      <div className="cards-slider-wrapper">
        {
    photos.map((photo) => (
      <Photo key={photo._id} index={photo.index} photo={photo} />
    ))
      }
      </div>
    </div>
  );
};

export default PhotoCard;
