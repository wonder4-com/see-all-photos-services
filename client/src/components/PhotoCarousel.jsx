/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/extensions */
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
    // this.setState({
    //   selectedPhoto: photos[3],
    // })
    console.log('left arrow has been clicked');
  }

  nextPhoto() {
    const { photos } = this.props;
    this.setState({
      selectedPhoto: this.state.selectedPhoto + 4,
    });
    console.log('right arrow has been clicked', photos[this.state.selectedPhoto]);
  }

  render() {
    const { selectedPhoto, show } = this.state;
    const showHideClassName = show ? 'photo display-block' : 'photo display-none';
    return (
      <div className={showHideClassName}>
        <PhotoCard photos={this.props.photos} currentPhoto={this.selectedPhoto} />
        <div className="arrows">
          <div
            type="click"
            className="slide-arrow-left"
          // direction="left"
            onClick={this.prevPhoto}
          />
          <div
            type="click"
            className="slide-arrow-right"
          // direction="right"
          // value={}
            onClick={this.nextPhoto}
          />
        </div>
      </div>
    );
  }
}

export default PhotoCarousel;
