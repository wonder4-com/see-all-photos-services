import React from 'react';
import PhotoCard from './PhotoCard.jsx';
class PhotoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPhoto: 0,
      show: true,
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
    // console.log('left arrow has been clicked', photos[this.state.selectedPhoto]);
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
    // console.log('right arrow has been clicked', photos[this.state.selectedPhoto]);
  }

  render() {
    const { selectedPhoto, show } = this.state;
    const { photos } = this.props;
    const showHideClassName = show ? 'photo display-block' : 'photo display-none';
    return (
      <div className={showHideClassName}>
        <PhotoCard photos={photos} selectedPhotoIndex={selectedPhoto} />
        <div className="arrows">
          <div
            type="click"
            className="slide-arrow-left"
            onClick={this.prevPhoto}/>
          <div
            type="click"
            className="slide-arrow-right"
            onClick={this.nextPhoto}/>
        </div>
      </div>
    );
  }
}

export default PhotoCarousel;
