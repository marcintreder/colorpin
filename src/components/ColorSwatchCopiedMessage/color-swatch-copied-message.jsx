import React from 'react';
import PropTypes from 'prop-types';
import CopiedMessage from './color-swatch-copied-message.styles';

const ColorSwatchCopiedMessage = (props) => {
  return (
    <CopiedMessage
      visibility={props.visibility}
      luminosity={props.luminosity} >
      Hex copied!
    </CopiedMessage>
  );
};

ColorSwatchCopiedMessage.propTypes = {
  visibility: PropTypes.string.isRequired,
  luminosity: PropTypes.number.isRequired,
};

export { ColorSwatchCopiedMessage as default };
