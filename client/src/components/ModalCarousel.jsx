import React from 'react';
import ModalCard from './ModalCard.jsx';

class ModalCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPhoto: 0,
    };
  }


  render() {
    const { mainPhoto } = this.state;
    const { handleClose, photos, show } = this.props;
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    return (
      <div>
        <div className={showHideClassName}>
          <section className="modal-main">
            <ModalCard
              photos={photos}/>
            <button onClick={handleClose}>close X</button>
          </section>
        </div>
      </div>
    );
  }
}

export default ModalCarousel;
