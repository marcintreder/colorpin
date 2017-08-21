import React from 'react';
import PropTypes from 'prop-types';
import { SmallSwatch, EmptySwatch } from './color-swatch-small.styles';

const ColorSwatchSmall = (props) => {
  if (props.empty) {
    return (
      <EmptySwatch
        text={'Add first color'} />
    );
  }
  return (
    <SmallSwatch
      hex={props.hex}
      to={props.link} />
  );
};

ColorSwatchSmall.propTypes = {
  hex: PropTypes.string,
  link: PropTypes.string,
  empty: PropTypes.bool,
};

ColorSwatchSmall.defaultProps = {
  hex: '#006cff',
  link: '/',
  empty: false,
};

export { ColorSwatchSmall as default };
