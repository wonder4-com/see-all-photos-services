import React from 'react';
import Modal from './Modal.jsx';

const ModalCard = ({ photos }) => (
  <div className="modal-card-wrapper">
    <div className="modal-image">
      {
        photos.map((photo) => (
          <Modal key={photo._id} index={photos.indexOf(photo)} photo={photo} />
        ))
      }
    </div>
  </div>
);

export default ModalCard;
