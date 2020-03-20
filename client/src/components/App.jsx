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
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
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
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    const { photos, show } = this.state;
    return (
      <div id="app">
        <div className="container">
          <div className="button">
            <ModalCarousel
              photos={photos}
              show={show}
              handleClose={this.hideModal}
            />
          </div>
          <PhotoCarousel photos={photos} />
          <div className="see-all-photos-button">
            <button type="button" onClick={this.showModal}>
              See All Photos
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
