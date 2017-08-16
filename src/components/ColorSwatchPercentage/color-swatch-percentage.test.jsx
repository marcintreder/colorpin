/* eslint-disable no-unused-vars, no-undef */
import React from 'react';
import { mount } from 'enzyme';

import ColorSwatchPercentage from './color-swatch-percentage';

describe('percentage renders a span that contains a % value', () => {
  it('renders span', () => {
    const wrapper = mount(<ColorSwatchPercentage
                            percentage='50%' />);
    const html = wrapper.html();
    const text = wrapper.text();

    expect(html).toContain('span');
    expect(text).toContain('%');
  });
});
