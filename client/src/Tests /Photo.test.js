import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { IoT1ClickDevicesService } from 'aws-sdk';

const Photo = require('../components/Photo.jsx');

describe('<Photo />', () => {
  const photoObj = {
    id: 123, user: 'Murphy', photoTitle: 'My Photo', date: 'January, 1 2010', photoURL: 'www.myphoto.com/myphoto.jpg', comment: 'this was so much fun! It was a challenge, but I truly enjoyed the experience.',
  };
  const wrapper = shallow(<Photo photoObj={photoObj} />);
  expect(wrapper.find('.photoObj')).toBeDefined();
  expect(wrapper.find('.photoObj')).toHaveProperty(photoObj.photoURL);