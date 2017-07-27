import React from 'react';
import PropTypes from 'prop-types';

const ColorSwatchAddSuccess = (props) => {
  return (
    <span
      className="b-color-added-success"
      style={
        props.luminosity > 79 ? { color: '#006980', borderColor: '#006980' } :
          { color: '#ccf6ff', borderColor: '#ccf6ff' }}
    >Color added!
    </span>
  );
};

ColorSwatchAddSuccess.propTypes = {
  luminosity: PropTypes.number.isRequired,
};

export { ColorSwatchAddSuccess as default };
