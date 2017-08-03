import React from 'react';
import PropTypes from 'prop-types';
import Percentage from './color-swatch-percentage.styles';

const ColorSwatchPercentage = (props) => {
  return (
    <Percentage>{props.percentage}</Percentage>
  );
};

ColorSwatchPercentage.propTypes = {
  percentage: PropTypes.string.isRequired,
};

export { ColorSwatchPercentage as default };
