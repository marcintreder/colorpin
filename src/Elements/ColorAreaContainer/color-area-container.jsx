import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ColorSwatchBox from '../ColorSwatchBox/color-swatch-box';
import ColorSwatchAddWarning from '../ColorSwatchAddWarning/color-swatch-add-warning';
import ColorSwatchAddSuccess from '../ColorSwatchAddSuccess/color-swatch-add-success';
import ColorSwatchPercentage from '../ColorSwatchPercentage/color-swatch-percentage';
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

  render() {
    return (
      <ColorSwatchBox
        hex={this.props.hex}
        copyMsg={() => { this.changeCopied(); }} >
        <ColorSwatchCopiedMessage
          luminosity={this.props.luminosity}
          visibility={this.state.copiedMsg} />
        <ColorSwatchAddWarning luminosity={this.props.luminosity} />
        <ColorSwatchAddSuccess luminosity={this.props.luminosity} />
        <ColorSwatchPercentage percentage={this.props.percentage} />
      </ColorSwatchBox>
    );
  }
}

ColorAreaContainer.propTypes = {
  hex: PropTypes.string.isRequired,
  luminosity: PropTypes.number.isRequired,
  percentage: PropTypes.string.isRequired,
};

// Eliminate all html tags that can be replaced with components
// Change styling to Glamorous and optimize
// Be careful with functions that use class names (!). Refactor them
// On Click on box change visibility of warning/success

export { ColorAreaContainer as default };
