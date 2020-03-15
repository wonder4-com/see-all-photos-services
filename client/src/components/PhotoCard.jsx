import React from 'react';
import Photo from './Photo.jsx';


const PhotoCard = ({ photos }) => (
  <div>
    {
    photos.map((photo) => (
      <Photo key={photo._id} photo={photo} />
    ))
}
  </div>
);

export default PhotoCard;
