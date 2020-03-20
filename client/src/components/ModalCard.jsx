import React from 'react';
import Modal from './Modal.jsx';
import Text from './Text.jsx';

const ModalCard = ({ photos }) => {
  return (
  <div className="modal-card-wrapper">
      {
        photos.map((photo) => (
<React.Fragment>
  <Modal key={photo._id} index={photos.indexOf(photo)} photo={photo} />
  <Text key={photos.indexOf(photo)} photo={photo} />
</React.Fragment>
        ))
      }
    </div>
  )
};

export default ModalCard;
