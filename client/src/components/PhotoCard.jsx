import React from 'react';
import Photo from './Photo.jsx';

const PhotoCard = ({ photos, currentPhoto }) => (
  <div className="cards-slider-wrapper">
    <div className="cards-slider">
      {
    photos.map((photo) => (
      <Photo key={photo._id} index={photos.indexOf(photo)} photo={photo} />
    ))
      }
    </div>
  </div>
);

export default PhotoCard;
