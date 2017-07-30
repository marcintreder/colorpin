import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CopyLinkHex, CopyLinkRgb, CopyLinkHsl } from './color-swatch-colors-list.styles';

class ColorSwatchColorsList extends Component {
  constructor(props) {
    super(props);

    this.state = { active: 'none' };
  }

  handleClick(colorType) {
    this.setState({ active: colorType });
    setTimeout(() => {
      this.setState({ active: 'none' });
    }, 700);
  }
  // Class 'b-copy-code_clipboard' is used by clipboard.js
  render() {
    return (
      <ul className="list-colors-codes">
        <li>
          <CopyLinkHex
            className="b-copy-code_clipboard"
            active={this.state.active}
            onClick={() => this.handleClick('hex')}
            role="button"
            tabIndex={0}
            data-clipboard-text={this.props.hex}
          >{this.props.hex}
          </CopyLinkHex>
        </li>
        <li>
          <CopyLinkRgb
            className="b-copy-code_clipboard"
            active={this.state.active}
            onClick={() => this.handleClick('rgb')}
            role="button"
            tabIndex={0}
            data-clipboard-text={this.props.rgb}
          >{this.props.rgb}
          </CopyLinkRgb>
        </li>
        <li>
          <CopyLinkHsl
            className="b-copy-code_clipboard"
            active={this.state.active}
            onClick={() => this.handleClick('hsl')}
            role="button"
            tabIndex={0}
            data-clipboard-text={this.props.hsl}
          >{this.props.hsl}
          </CopyLinkHsl>
        </li>
      </ul>
    );
  }
}

ColorSwatchColorsList.propTypes = {
  hex: PropTypes.string.isRequired,
  hsl: PropTypes.string.isRequired,
  rgb: PropTypes.string.isRequired,
};

export { ColorSwatchColorsList as default };
