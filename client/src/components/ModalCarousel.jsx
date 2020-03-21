import React from 'react';
import ModalCard from './ModalCard.jsx';
import ModalSideBar from './ModalSideBar.jsx';

class ModalCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPhoto: 0,
    };
    this.prevPhoto = this.prevPhoto.bind(this);
    this.nextPhoto = this.nextPhoto.bind(this);
  }

  prevPhoto() {
    const { photos } = this.props;
    if (this.state.selectedPhoto <= 1) {
      this.setState({
        selectedPhoto: 0,
      });
    }
    this.setState({
      selectedPhoto: this.state.selectedPhoto - 1 || 0,
    });
  }

  nextPhoto() {
    const { photos } = this.props;
    if (this.state.selectedPhoto <= photos.length - 1) {
      this.setState({
        selectedPhoto: photos.length - 1,
      })
    }
    this.setState({
      selectedPhoto: this.state.selectedPhoto + 1,
    });
  }

  render() {
    const { selectedPhoto } = this.state;
    const { photos, show, handleClose } = this.props;
    const showHideClassName = show ? 'model display-block' : 'model display-none';
    return (
      <div>
        <div className={showHideClassName}>
          <section className="modal-main">
            <div className="close-button"> 
            <button onClick={handleClose}>close X</button>
              </div>
              <div className="side-bar-container">
            <ModalSideBar photos={photos} />
            </div>
            <ModalCard
              photos={photos} selectedPhotoIndex={selectedPhoto} />
          </section>
          <div className="arrows">
          <div
            type="click"
            className="modal-slide-arrow-left"
            onClick={this.prevPhoto}/>
          <div
            type="click"
            className="modal-slide-arrow-right"
            onClick={this.nextPhoto}/>
        </div>
        </div>
      </div>
    );
  }
}

export default ModalCarousel;
