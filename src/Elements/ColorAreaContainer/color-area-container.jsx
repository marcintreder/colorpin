import React from 'react';
import PropTypes from 'prop-types';

import ColorSwatchBox from '../ColorSwatchBox/color-swatch-box';
import ColorSwatchAddWarning from '../ColorSwatchAddWarning/color-swatch-add-warning';
import ColorSwatchAddSuccess from '../ColorSwatchAddSuccess/color-swatch-add-success';
import ColorSwatchPercentage from '../ColorSwatchPercentage/color-swatch-percentage';

const ColorAreaContainer = (props) => {
  return (
    <ColorSwatchBox hex={props.hex} copyColor={props.copyColor}>
      <ColorSwatchAddWarning luminosity={props.luminosity} />
      <ColorSwatchAddSuccess luminosity={props.luminosity} />
      <ColorSwatchPercentage percentage={props.percentage} />
    </ColorSwatchBox>
  );
};

ColorAreaContainer.propTypes = {
  hex: PropTypes.string.isRequired,
  copyColor: PropTypes.func.isRequired,
  luminosity: PropTypes.number.isRequired,
  percentage: PropTypes.string.isRequired,
};

// Eliminate all html tags that can be replaced with components
// Change styling to Glamorous and optimize
// Be careful with functions that use class names (!). Refactor them

export { ColorAreaContainer as default };
