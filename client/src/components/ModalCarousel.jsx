import React from 'react';
import ModalCard from './ModalCard.jsx';

const ModalCarousel = ({ handleClose, show, photos }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <main>
      <div className={showHideClassName}>
        <section className="modal-main">
          <ModalCard photos={photos} />
          <button onClick={handleClose}>close X</button>
        </section>
      </div>
    </main>
  );
};

export default ModalCarousel;
