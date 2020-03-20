import React from 'react';
import { ajax } from 'jquery';
import PhotoCarousel from './PhotoCarousel.jsx';
import ModalCarousel from './ModalCarousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      show: false,
      showCarousel: true,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    // this.showPhotoCarousel = this.showPhotoCarousel.bind(this);
    // this.hidePhotoCarousel = this.hidePhotoCarousel.bind(this);
  }

  componentDidMount() {
    ajax({
      type: 'GET',
      url: '/seeAllPhotos',
      success: (photos) => this.setState({ photos }),
      error: (error) => console.log('error', error),
    });
  }

  showModal() {
    console.log('show modal was invoked');
    this.setState({ 
      show: true,
      showCarousel: false,
    });
  }

  hideModal() {
    this.setState({ 
      show: false,
      showCarousel: true,
    });
  }

  render() {
    const { photos, show, showCarousel } = this.state;
    const showHideClassName = showCarousel ? 'carousel display-all' : 'carousel display-fade';
    return (
      <div id="app">
        <div className="modal-container">
            <ModalCarousel
              photos={photos}
              show={show}
              handleClose={this.hideModal}/>
          </div>

          <div className={showHideClassName}>
          <PhotoCarousel
          photos={photos}
          showCarousel={showCarousel}/>
          
          <div className="see-all-photos-button">
            <button type="button" onClick={this.showModal} >
              See All {photos.length-1}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
