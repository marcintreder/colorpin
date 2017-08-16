/* eslint-disable no-unused-vars, no-undef */

import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import AddButton from './e-add-button';

const addColor = () => {
  return;
};

describe('<AddButton /> should return html <button> when size === \'big\'', () => {
  it('renders big button', () => {
    const button = mount(<AddButton size="big" addColor={addColor} />);
    const html = button.html();

    expect(html).toContain('button');
  });
});

describe('<AddButton /> should return html <button> when size === \'small\'', () => {
  it('renders small button', () => {
    const button = mount(<AddButton size="small" addColor={addColor} />);
    const html = button.html();

    expect(html).toContain('button');
  });
});

describe('<AddButton /> with anything but \'small\' and \'big\' passed to props size should return error', () => {
  it('renders button with an error', () => {
    const button = mount(<AddButton size="test" addColor={addColor} />);

    sinon.stub(console, 'error');
    // throws error into a console whenever props are incorrect
  });
});
