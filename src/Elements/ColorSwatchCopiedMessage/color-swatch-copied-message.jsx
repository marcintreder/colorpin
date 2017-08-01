import React from 'react';
import PropTypes from 'prop-types';
import ColorSwatchCopiedMsg from './color-swatch-copied-message.styles';

const ColorSwatchCopiedMessage = (props) => {
  return (
    <ColorSwatchCopiedMsg
      visibility={props.visibility}
      luminosity={props.luminosity} >
      Hex copied!
    </ColorSwatchCopiedMsg>
  );
};

ColorSwatchCopiedMessage.propTypes = {
  visibility: PropTypes.string.isRequired,
  luminosity: PropTypes.number.isRequired,
};

export { ColorSwatchCopiedMessage as default };
