/* eslint-disable no-unused-vars, no-undef */
import React from 'react';
import { mount } from 'enzyme';

import SearchAddMessage from './search-add-message';

describe('<SearchAddMessage /> should render a span with a text based on the prop msgVisibility', () => {
  it('renders span with text \'Color added!\'', () => {
    const wrapper = mount(<SearchAddMessage
                            msgVisibility="success" />);
    const html = wrapper.html();
    const text = wrapper.text();

    expect(html).toContain('span');
    expect(text).toContain('Color added!');
  });
  it('renders span with text warning', () => {
    const wrapper = mount(<SearchAddMessage
                            msgVisibility="warning" />);
    const html = wrapper.html();
    const text = wrapper.text();

    expect(html).toContain('span');
    expect(text).toContain('Color already on the list');
  });
  it('renders span without any text', () => {
    const wrapper = mount(<SearchAddMessage
                            msgVisibility="hidden" />);
    const html = wrapper.html();
    const text = wrapper.text();

    expect(html).toContain('span');
    expect(text).toContain('');
  });
});
