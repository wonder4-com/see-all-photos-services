import React from 'react';
import Photo from './Photo.jsx';

const PhotoCard = ({ photos }) => (
  <div className="cards-slider-wrapper">
    <div className="cards-slider">
      {
    photos.map((photo) => (
      <Photo key={photo._id} index={photo.index} photo={photo} />
    ))
      }
    </div>
  </div>
);

export default PhotoCard;
