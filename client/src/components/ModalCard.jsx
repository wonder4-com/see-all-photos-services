import React from 'react';
import Modal from './Modal.jsx';
import Text from './Text.jsx';

const ModalCard = ({ photos, selectedPhotoIndex }) => {
  const renderPhotos = photos.slice(selectedPhotoIndex, selectedPhotoIndex + 1);
  return (
  <div className="modal-card-wrapper">
    <div className="modal-slider">
      {
        renderPhotos.map((photo) => (
<React.Fragment>
  <Modal key={photo._id} index={photos.indexOf(photo)} photo={photo} />
  <Text key={photos.indexOf(photo)} photo={photo} />
</React.Fragment>
        ))
      }
    </div>
    </div>
  )
};

export default ModalCard;
