/* eslint-disable no-unused-vars, no-undef */
import React from 'react';
import { mount } from 'enzyme';

import ColorSwatchCopiedMessage from './color-swatch-copied-message';
import ColorSwatchCopiedMsg from './color-swatch-copied-message.styles';

describe('<ColorSwatchCopiedMessage /> should render a span with a text \'hex copied\'', () => {
  it('renders span', () => {
    const wrapper = mount(<ColorSwatchCopiedMessage
                            visibility="visible"
                            luminosity={99} />);
    const html = wrapper.html();
    const text = wrapper.text();

    expect(html).toContain('span');
    expect(text).toContain('Hex copied!');
  });
});
