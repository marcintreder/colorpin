import React from 'react';
import PropTypes from 'prop-types';

const ColorSwatchPercentage = (props) => {
  return (
    <span className="b-color-percentage">{props.percentage}</span>
  );
};

ColorSwatchPercentage.propTypes = {
  percentage: PropTypes.string.isRequired,
};

export { ColorSwatchPercentage as default };
