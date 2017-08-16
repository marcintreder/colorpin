/* eslint-disable no-unused-vars, no-undef */
import React from 'react';
import { mount } from 'enzyme';

import SearchPercentage from './search-percentage';

describe('<SearchPercentage /> should render an input wrapped in a span', () => {
  const percent = 5;
  const searchChange = () => {
    return;
  };
  const wrapper = mount(<SearchPercentage
                          percent={percent}
                          change={searchChange} />);
  const html = wrapper.html();
  const text = wrapper.text();

  it('renders the span wrapper', () => {
    expect(html).toContain('span');
  });

  it('renders the span wrapper with an input as a child', () => {
    expect(wrapper.childAt(0).html()).toContain('input');
  });

  it('input has to have type of number', () => {
    expect(wrapper.childAt(0).html()).toContain('type="number"');
  });

  it('input has to have value of percent', () => {
    expect(wrapper.childAt(0).html()).toContain(`value="${percent}"`);
  });

  it('input should have min/max set to 1 - 99 range', () => {
    expect(wrapper.childAt(0).html()).toContain('min="1" max="99"');
  });
});
