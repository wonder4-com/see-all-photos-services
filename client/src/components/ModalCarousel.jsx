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
            <div className="close-button"> 
            <button onClick={handleClose}>close X</button>
              </div>
              <div className="full-modal-container">
              <div className="side-bar-container">
              <div className="restaurant-title" >
                Photos for Restaurant Kitchen
              <div className="restaurant-subtitle">
                See All {photos.length}
                </div>
            <ModalSideBar photos={photos} />
            </div>
            </div>
            <ModalCard
              photos={photos} selectedPhotoIndex={selectedPhoto} />
         
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
      </div>
    );
  }
}

export default ModalCarousel;
