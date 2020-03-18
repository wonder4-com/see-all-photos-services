/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render, describe, it } from 'enzyme';

const PhotoCard = require('../components/PhotoCard.jsx');

describe('<PhotoCard />', () => {
  it('should render without throwing an error', () => {
    expect(mount(<PhotoCard />).contains(<div className="cards-slider" />)).toBe(true);
  });

  it('should be selectable by class "cards-slider"', () => {
    expect(mount(<PhotoCard />).is('.cards-slider')).toBe(true);
  });

  it('should mount in a full DOM', () => {
    expect(mount(<PhotoCard />).find('.cards-slider').length).toBe(1);
  });
});
