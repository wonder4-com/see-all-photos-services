import React from 'react';
import Photo from './Photo.jsx';

// eslint-disable-next-line react/prop-types
const PhotoCard = ({ photos }) => (
  <div>
    {
    // eslint-disable-next-line react/prop-types
    photos.map((photo) => (
      // eslint-disable-next-line no-underscore-dangle
      <Photo key={photo._id} photo={photo} />
    ))
}
  </div>
);

export default PhotoCard;
