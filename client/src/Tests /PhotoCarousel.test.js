import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
// import { shallow, mount, render } from 'enzyme';
import { shallow, mount, render } from '../../../enzyme.config';

const PhotoCarousel = require('../components/PhotoCarousel.jsx');

describe('<PhotoCarousel />', () => {
  it('should have class of carousel', () => {
    let wrapper = mount(<div className="carousel" />);
    expect(wrapper.exists('.carousel')).to.equal(true);
    expect(wrapper.find('.other-class').exists()).to.equal(false);
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    let wrapper = mount((
      <PhotoCarousel onButtonClick={onButtonClick} />
    ));
    wrapper.find('button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });

  it('renders children when passed in', () => {
    const wrapper = mount((
      <PhotoCarousel>
        <div className="unique" />
      </PhotoCarousel>
    ));
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });

  it('calls componentDidMount', () => {
    sinon.spy(PhotoCarousel.prototype, 'componentDidMount');
    let wrapper = mount(<PhotoCarousel />);
    expect(PhotoCarousel.prototype.componentDidMount).to.have.property('callCount', 1);
    PhotoCarousel.prototype.componentDidMount.restore();
  });
});