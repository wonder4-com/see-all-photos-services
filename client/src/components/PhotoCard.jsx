import React from 'react';
import Photo from './Photo.jsx';

 
const PhotoCard = ({ photos, selectedPhotoIndex }) => {
  const renderPhotos = photos.slice(selectedPhotoIndex);
  return (
  <div className="cards-slider-wrapper">
    <div className="cards-slider">
      {
    renderPhotos.map((photo) => (
      <Photo key={photo._id} index={photos.indexOf(photo)} photo={photo} />
    ))
      }
    </div>
  </div>

  );
};

export default PhotoCard;
