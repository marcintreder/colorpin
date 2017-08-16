/* eslint-disable no-unused-vars, no-undef */
import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import ColorSwatchColorsList from './color-swatch-colors-list';
import { CopyLinkHex, CopyLinkRgb, CopyLinkHsl } from './color-swatch-colors-list.styles';

describe('<ColorSwatchColorsList /> should return an <ul> list', () => {
  it('renders list', () => {
    const list = mount(<ColorSwatchColorsList
                          hex='#006cff'
                          rgb='rgb(0, 108, 255)'
                          hsl='hsl(215, 100%, 50%)' />);
    const html = list.html();

    expect(html).toContain('ul');
  });
});

describe('children of <ColorSwatchColorsList /> have to have class b-copy-code_clipboard', () => {
  it('render list', () => {
    const list = mount(<ColorSwatchColorsList
                          hex='#006cff'
                          rgb='rgb(0, 108, 255)'
                          hsl='hsl(215, 100%, 50%)'
                        />);
    const childrenWithClass = list.find('.b-copy-code_clipboard').length;

    expect(childrenWithClass).toEqual(3);
  });
});

describe('Click on a hex link should change state ~actve~ of a component to hex', () => {
  it('render list', () => {
    const list = mount(<ColorSwatchColorsList
                          hex='#006cff'
                          rgb='rgb(0, 108, 255)'
                          hsl='hsl(215, 100%, 50%)'
                        />);

    const hexLink = mount(<CopyLinkHex
                            className="b-copy-code_clipboard"
                            active={list.state.active}
                            onClick={() => handleClick('hex')}
                            role="button"
                            tabIndex={0}
                            data-clipboard-text={list.props.hex}
                          />);

    const handleClick = (colorType) => {
      list.setState({ active: colorType });
      setTimeout(() => {
        list.setState({ active: 'none' });
      }, 700);
    }

    hexLink.simulate('click');

    expect(list.state('active')).toEqual('hex');
  });
});
