/* eslint-disable no-unused-vars, no-undef */
import React from 'react';
import { mount } from 'enzyme';

import SearchInput from './search-input';

describe('<SearchInput /> should render an input wrapped in a span', () => {
  const searchTerm = '#006cff';
  const searchChange = () => {
    return;
  };
  const wrapper = mount(<SearchInput
                          term={searchTerm}
                          change={searchChange} />);
  const html = wrapper.html();
  const text = wrapper.text();

  it('renders the span wrapper', () => {
    expect(html).toContain('span');
  });

  it('renders the span wrapper with an input as a child', () => {
    expect(wrapper.childAt(0).html()).toContain('input');
  });

  it('input has to have type of search', () => {
    expect(wrapper.childAt(0).html()).toContain('type="search"');
  });

  it('input has to have value of searchTerm', () => {
    expect(wrapper.childAt(0).html()).toContain(`value="${searchTerm}"`);
  });

  it('input should habe the spellcheck turned of', () => {
    expect(wrapper.childAt(0).html()).toContain(`spellcheck="false"`);
  });
});
