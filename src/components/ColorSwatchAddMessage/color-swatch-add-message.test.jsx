/* eslint-disable no-unused-vars, no-undef */
import React from 'react';
import { mount } from 'enzyme';

import ColorSwatchAddMessage from './color-swatch-add-message';

describe('<ColorSwatchAddMessage /> should render a span with a relevant message', () => {
  it('renders span', () => {
    const wrapper = mount(<ColorSwatchAddMessage
                            msgVisibility="warning"
                            luminosity={99} />);
    const html = wrapper.html();
    const text = wrapper.text();

    expect(html).toContain('span');
    expect(text).toContain('Color already on the list');
  });
  it('renders span', () => {
    const wrapper = mount(<ColorSwatchAddMessage
                            msgVisibility="success"
                            luminosity={99} />);
    const html = wrapper.html();
    const text = wrapper.text();

    expect(html).toContain('span');
    expect(text).toContain('Color added!');
  });
});
