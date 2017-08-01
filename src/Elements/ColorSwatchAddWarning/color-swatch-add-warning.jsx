import React from 'react';
import PropTypes from 'prop-types';

const ColorSwatchAddWarning = (props) => {
  return (
    <span
      className="b-color-added-warning"
      style={
        props.luminosity >= 79 ? { color: '#777777', borderColor: '#777777' } :
          { color: '#ffffff', borderColor: '#ffffff' }}>
      Color already on the list
    </span>
  );
};

ColorSwatchAddWarning.propTypes = {
  luminosity: PropTypes.number.isRequired,
};

export { ColorSwatchAddWarning as default };
