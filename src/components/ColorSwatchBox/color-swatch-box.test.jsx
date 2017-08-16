/* eslint-disable no-unused-vars, no-undef */
import React from 'react';
import { mount } from 'enzyme';

import ColorSwatchBox from './color-swatch-box';


describe('<ColorSwatchBox /> should return div with role ' +
          'button and class b-copy-code_clipboard', () => {
  it('renders div', () => {
    const props = {
      hex: '#006cff',
    };

    const wrapper = mount(<ColorSwatchBox
                            hex={props.hex}
                            copyMsg={props.copyMsg}
                            className="b-copy-code_clipboard"
                            background={props.hex}
                            data-clipboard-text={props.hex}
                            tabIndex={0}
                            onClick={props.copyMsg} />,
                          { context: { hex: '#006cff'},});

    const html = wrapper.html();

    expect(html).toContain('<div data-clipboard-text="#006cff" role="button" tabindex="0"');
    expect(wrapper.hasClass('b-copy-code_clipboard')).toBeTruthy();
  });
});
