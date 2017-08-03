import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ColorSwatchBox from '../ColorSwatchBox/color-swatch-box';
import ColorSwatchPercentage from '../ColorSwatchPercentage/color-swatch-percentage';
import ColorSwatchAddMessage from '../ColorSwatchAddMessage/color-swatch-add-message';
import ColorSwatchCopiedMessage from '../ColorSwatchCopiedMessage/color-swatch-copied-message';

class ColorAreaContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { copiedMsg: 'hidden' };
  }

  changeCopied() { // Shows/Hide 'copied' message by changing state
    this.setState({ copiedMsg: 'visible' });
    setTimeout(() => {
      this.setState({ copiedMsg: 'hidden' });
    }, 900);
  }

  showMessage() {
    return (<ColorSwatchAddMessage
      luminosity={this.props.luminosity}
      msgVisibility={this.props.msgVisibility} />);
  }

  render() {
    return (
      <ColorSwatchBox
        hex={this.props.hex}
        copyMsg={() => { this.changeCopied(); }} >
        <ColorSwatchCopiedMessage
          luminosity={this.props.luminosity}
          visibility={this.state.copiedMsg} />
        { /* eslint-disable no-nested-ternary */ }
        { this.props.msgVisibility === 'warning' ? this.showMessage() :
          this.props.msgVisibility === 'success' ? this.showMessage() : '' }
        <ColorSwatchPercentage percentage={this.props.percentage} />
      </ColorSwatchBox>
    );
  }
}

ColorAreaContainer.propTypes = {
  hex: PropTypes.string.isRequired,
  luminosity: PropTypes.number.isRequired,
  percentage: PropTypes.string.isRequired,
  msgVisibility: PropTypes.oneOf(['hidden', 'warning', 'success']).isRequired,
};

// Consider changing all the messages from visibility to display none
// Refactor functions for copyMsg
// Add Glamorous to ColorSwatch and ColorAreaContainer containers
// Add tests to Color Swatch and ColorAreaContainer

export { ColorAreaContainer as default };
