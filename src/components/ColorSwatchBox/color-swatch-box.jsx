import React from 'react';
import PropTypes from 'prop-types';
import ColorSwatchBoxColor from './color-swatch-box.styles';

const ColorSwatchBox = (props) => {
  return (
    <ColorSwatchBoxColor
      className="b-copy-code_clipboard"
      background={props.hex}
      data-clipboard-text={props.hex}
      role="button"
      tabIndex={0}
      onClick={props.copyMsg}>
      { props.children /* percentage warning and success message */ }
    </ColorSwatchBoxColor>
  );
};

ColorSwatchBox.propTypes = {
  hex: PropTypes.string.isRequired,
  copyMsg: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export { ColorSwatchBox as default };
