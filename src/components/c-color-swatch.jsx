import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import db from '../db';


import { addColor, loadColors } from '../actions/index';

import AddButton from '../Elements/AddButton/e-add-button';
import ColorAreaContainer from '../Elements/ColorAreaContainer/color-area-container';
import ColorSwatchColorsList from '../Elements/ColorSwatchColorsList/color-swatch-colors-list';

class ColorSwatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      copiedMsg: 'hidden',
      addMsg: 'hidden', // state of the ColorSwatchAddMessage component
    };
  }

  postColor(e) {
    e.persist();

    /** Post colors saves a gievn color in a database
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

        /** When adding a color is successful state of
        * addMsg changes to success and renders ColorSwatchAddMessage with
        * a success message on the color swatch */

        this.setState({ addMsg: 'success' });
        setTimeout(() => {
          this.setState({ addMsg: 'hidden' });
        }, 900);
      } else {
        /** When adding a color is not successful state of
        * addMsg changes to warning and renders ColorSwatchAddMessage with
        * a warning message on the color swatch */
        this.setState({ addMsg: 'warning' });
        setTimeout(() => {
          this.setState({ addMsg: 'hidden' });
        }, 900);
      }
    });
  }

  render() {
    const hex = this.props.hex;
    const hsl = this.props.hsl;
    const currentPercent = this.props.percentage;
    const luminosity = parseInt(hsl.substring(hsl.lastIndexOf(' '), hsl.lastIndexOf('%')).trim(), 10);

    return (
      <li key={currentPercent} className="b-color-swatch">
        <ColorAreaContainer
          hex={this.props.hex}
          luminosity={luminosity}
          percentage={this.props.percentage}
          msgVisibility={this.state.addMsg} />
        <AddButton
          size="small"
          addColor={(e) => { this.postColor(e, hex); }}
          showSuccess={(e) => { this.showSuccessMessage(e); }} />
        <ColorSwatchColorsList
          hex={this.props.hex}
          rgb={this.props.rgb}
          hsl={this.props.hsl} />
      </li>
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
