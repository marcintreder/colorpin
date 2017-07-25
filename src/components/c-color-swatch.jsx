import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addColor, loadColors } from '../actions/index';

import AddButton from '../Elements/addButton/e-add-button';

import db from '../db';

class ColorSwatch extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  postColor(e) {
    e.persist();
    // selector of the warning message for a particular color swatch
    const warning = e.target.parentNode.children[0].children[0];
    const success = e.target.parentNode.children[0].children[1];

    db.table('color').toArray().then((colors) => {
      const currentColorsArray = [];
      const color = this.props.hex;

      colors.forEach((swatch) => {
        currentColorsArray.push(swatch.colorCode.color);
      });

      if (currentColorsArray.indexOf(color) < 0) {
        this.setState({ color });

        currentColorsArray.push(color);

        this.props.addColor({ color });
        this.props.loadColors();

        this.showSuccessMessage(success);
      } else {
        this.showWarning(warning);
      }
    });
  }

  showWarning(warning) {
    warning.style.visibility = 'visible';

    this.hideWarning(warning);
  }

  hideWarning(warning) {
    setTimeout(() => {
      warning.style.visibility = 'hidden';
    }, 900);
  }

  showSuccessMessage(success) {
    success.style.visibility = 'visible';
    this.hideSuccessMessage(success);
  }

  hideSuccessMessage(success) {
    setTimeout(() => {
      success.style.visibility = 'hidden';
    }, 900);
  }

  handleClick(e) {
    e.persist();
    e.stopPropagation();

    const hsl = this.props.hsl;
    const luminosity = parseInt(hsl.substring(hsl.lastIndexOf(' '), hsl.lastIndexOf('%')).trim(), 10);

    if (e.target.className === 'b-color-swatch__color-area b-copy-code_clipboard' && luminosity <= 79) {
      e.target.classList.add('b-copied-white');
      setTimeout(() => {
        if (e.target.classList.contains('b-copied-white')) {
          e.target.classList.remove('b-copied-white');
        }
      }, 600);
    } else if (e.target.className === 'b-color-swatch__color-area b-copy-code_clipboard') {
      e.target.classList.add('b-copied-dark');
      setTimeout(() => {
        if (e.target.classList.contains('b-copied-dark')) {
          e.target.classList.remove('b-copied-dark');
        }
      }, 600);
    } else if (e.target.className === 'b-copy-code_clipboard' || e.target.className === 'b-copy-code_clipboard b-copy-code_hex') {
      e.target.classList.add('b-copied-text');
      setTimeout(() => {
        if (e.target.classList.contains('b-copied-text')) {
          e.target.classList.remove('b-copied-text');
        }
      }, 600);
    }
  }

  showPercentage() {
    return (<span className="b-color-percentage">{this.props.percentage}</span>);
  }

  render() {
    const hex = this.props.hex;
    const rgb = this.props.rgb;
    const hsl = this.props.hsl;
    const currentPercent = this.props.percentage;
    const luminosity = parseInt(hsl.substring(hsl.lastIndexOf(' '), hsl.lastIndexOf('%')).trim(), 10);

    return (
      <li key={currentPercent} className="b-color-swatch">
        <div
          className="b-color-swatch__color-area b-copy-code_clipboard"
          style={
            this.props.hex !== '#ffffff' ?
              { backgroundColor: this.props.hex, borderColor: this.props.hex } :
              { backgroundColor: this.props.hex, borderColor: '#f3f3f3' }}
          data-clipboard-text={hex}
          role="button"
          tabIndex={0}
          onClick={e => this.handleClick(e)}
        >
          <span
            className="b-color-added-warning"
            style={
              luminosity >= 79 ? { color: '#777777', borderColor: '#777777' } : { color: '#ffffff', borderColor: '#ffffff' }}
          >Color already on the list
          </span>
          <span
            className="b-color-added-success"
            style={
              luminosity > 79 ? { color: '#006980', borderColor: '#006980' } : { color: '#ccf6ff', borderColor: '#ccf6ff' }}
          >Color added!
          </span>
          { this.showPercentage() }
        </div>
        <AddButton
          size="small"
          addColor={(e) => { this.postColor(e, hex); }}
          showSuccess={(e) => { this.showSuccessMessage(e); }}
        />
        <section className="list-colors-codes">
          <span
            className="b-copy-code_clipboard b-copy-code_hex"
            onClick={e => this.handleClick(e)}
            role="button"
            tabIndex={0}
            data-clipboard-text={hex}
          >{hex}
          </span>
          <span
            className="b-copy-code_clipboard"
            onClick={e => this.handleClick(e)}
            role="button"
            tabIndex={0}
            data-clipboard-text={rgb}
          >{rgb}
          </span>
          <span
            className="b-copy-code_clipboard"
            onClick={e => this.handleClick(e)}
            role="button"
            tabIndex={0}
            data-clipboard-text={hsl}
          >{hsl}
          </span>
        </section>
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
