import React from 'react';
import Modal from './Modal.jsx';

const ModalCard = ({ photos }) => {
    return (
        <div className="modal-card-wrapper">
    <div className="modal-card">
      {
          photos.map((photo) => (
              <Modal key={photo._id} index={photo.index} photo={photo} />
        ))
      }
      </div>
    </div>
  );
};

export default ModalCard;
