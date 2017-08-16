import React from 'react';
import PropTypes from 'prop-types';
import AddMessage from './color-swatch-add-message.styles';

const ColorSwatchAddMessage = (props) => {
  return (
    <AddMessage
      luminosity={props.luminosity}
      msgVisibility={props.msgVisibility}>
      { /* eslint-disable no-nested-ternary */ }
      {props.msgVisibility === 'success' ? 'Color added!' :
        props.msgVisibility === 'warning' ? 'Color already on the list' : ''}
    </AddMessage>
  );
};

ColorSwatchAddMessage.propTypes = {
  luminosity: PropTypes.number.isRequired,
  msgVisibility: PropTypes.oneOf(['hidden', 'warning', 'success']).isRequired,
};

export { ColorSwatchAddMessage as default };
