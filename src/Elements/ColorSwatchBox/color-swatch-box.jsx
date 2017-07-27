import React from 'react';
import PropTypes from 'prop-types';

const ColorSwatchBox = (props) => {
  return (
    <div
      className="b-color-swatch__color-area b-copy-code_clipboard"
      style={
        props.hex !== '#ffffff' ?
          { backgroundColor: props.hex, borderColor: props.hex } :
          { backgroundColor: props.hex, borderColor: '#f3f3f3' }}
      data-clipboard-text={props.hex}
      role="button"
      tabIndex={0}
      onClick={props.copyColor}
    >
      {props.children}
    </div>
  );
};

ColorSwatchBox.propTypes = {
  hex: PropTypes.string.isRequired,
  copyColor: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export { ColorSwatchBox as default };
