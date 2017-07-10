import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';

import jss from 'jss';
import preset from 'jss-preset-default';
import injectSheet from 'react-jss';

import { addIcon } from '../JSS_Core/icons';
import { iconsMixin, hoverShadowMixin } from '../JSS_Core/mixins';
import { colors } from '../JSS_Core/colors';

import AddButton from './e-add-button';



test('AddButton with size big should return class big-0-2 from JSS', () => {
  const button = mount(<AddButton size='big' />);

  expect(button.hasClass('big-0-2')).toBeTruthy();
})

test('AddButton with size small should return class small-0-1 from JSS', () => {
  const button = mount(<AddButton size='small' />);
  
  expect(button.hasClass('small-0-1')).toBeTruthy();
})

test('AddButton with size other than small or big should return class small-0-1 from JSS', () => {
  const button = mount(<AddButton size='test' />);

  expect(button.hasClass('small-0-1')).toBeTruthy();
})
