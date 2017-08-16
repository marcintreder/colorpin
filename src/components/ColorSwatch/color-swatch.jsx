import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addColor, loadColors } from '../../actions/index';
import db from '../../db';

import AddButton from '../AddButton/e-add-button';
import ColorSwatchBox from '../ColorSwatchBox/color-swatch-box';
import ColorSwatchPercentage from '../ColorSwatchPercentage/color-swatch-percentage';
import ColorSwatchAddMessage from '../ColorSwatchAddMessage/color-swatch-add-message';
import ColorSwatchCopiedMessage from '../ColorSwatchCopiedMessage/color-swatch-copied-message';
import ColorSwatchColorsList from '../ColorSwatchColorsList/color-swatch-colors-list';

import Swatch from './color-swatch.styles';

class ColorSwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'hidden', // state responsible for showing messages: success, warning, copy confirm
    };
  }

  postColor() {
    /** Post colors saves given color in a database
    * and loads a new list of colors in the left side
    * navigation */
    db.table('color').toArray().then((colors) => {
      const currentColorsArray = [];
      const color = this.props.hex;
      /* After accessing the database we have to build
      * an Array of colors for local operations */
      colors.forEach((swatch) => {
        currentColorsArray.push(swatch.colorCode.color);
      });

      if (currentColorsArray.indexOf(color) < 0) {
        this.props.addColor({ color }); // adds new color * Redux *
        this.props.loadColors(); // loads new list of colors * Redux *
        /** When a color is successfully added, state of
        * 'message' changes to success and renders ColorSwatchAddMessage with
        * a success message on the color swatch */
        this.setState({ message: 'success' });
        setTimeout(() => {
          this.setState({ message: 'hidden' });
        }, 900);
      } else {
        /** When adding a color is not successful (color is already on the list)
        * state of 'message' changes to warning and renders
        * ColorSwatchAddMessage with a warning message on the color swatch */
        this.setState({ message: 'warning' });
        setTimeout(() => {
          this.setState({ message: 'hidden' });
        }, 900);
      }
    });
  }

  copyColor() {
    this.setState({ message: 'copy' });
    setTimeout(() => {
      this.setState({ message: 'hidden' });
    }, 900);
  }

  render() {
    const hsl = this.props.hsl;
    const currentPercent = this.props.percentage;
    const luminosity = parseInt(hsl.substring(hsl.lastIndexOf(' '), hsl.lastIndexOf('%')).trim(), 10);

    const showMessage = () => {
      // renders the success or warning message
      return (<ColorSwatchAddMessage
        luminosity={luminosity}
        msgVisibility={this.state.message} />);
    };

    return (
      <Swatch key={currentPercent}>
        <ColorSwatchBox
          hex={this.props.hex}
          copyMsg={() => { this.copyColor(); }}>
          <ColorSwatchCopiedMessage
            luminosity={luminosity}
            visibility={this.state.message} />
          { /* eslint-disable no-nested-ternary */ }
          { this.state.message === 'warning' ? showMessage('warning') :
            this.state.message === 'success' ? showMessage('success') : '' }
          <ColorSwatchPercentage percentage={this.props.percentage} />
        </ColorSwatchBox>
        <AddButton
          size="small"
          addColor={() => { this.postColor(); }} />
        <ColorSwatchColorsList
          hex={this.props.hex}
          rgb={this.props.rgb}
          hsl={this.props.hsl} />
      </Swatch>
    );
  }
}

ColorSwatch.propTypes = {
  hex: PropTypes.string.isRequired,
  hsl: PropTypes.string.isRequired,
  rgb: PropTypes.string.isRequired,
  percentage: PropTypes.string,
  addColor: PropTypes.func.isRequired,
  loadColors: PropTypes.func.isRequired,
};

ColorSwatch.defaultProps = {
  percentage: '5%',
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addColor, loadColors }, dispatch);
}

function mapStateToProps({ addedColor }) {
  return { addedColor, loadColors };
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorSwatch);
