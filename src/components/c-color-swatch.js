import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addColor } from '../actions/index';
import { loadColors } from '../actions/index';

import AddButton from '../Elements/e-add-button';

import db from '../db';
import _ from 'lodash';


class ColorSwatch extends Component {
  // color swatch data requirement: Hex, RGB, HSL, current percentage and function addColor
  // passed as props

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  render() {

    const hex = this.props.hex;
    const rgb = this.props.rgb;
    const hsl = this.props.hsl;
    const currentPercent = this.props.percentage;
    const luminosity = parseInt(hsl.substring(hsl.lastIndexOf(' '), hsl.lastIndexOf('%')).trim());

    return (
      <li key={ currentPercent } className='b-color-swatch'>
        <div className='b-color-swatch__color-area b-copy-code_clipboard' style={
            { hex } !== '#ffffff' ?
              { backgroundColor: hex, borderColor: hex } :
              { backgroundColor: hex, borderColor: '#f3f3f3' }}
              data-clipboard-text={hex}
              onClick = {e => this.handleClick(e)}
              >
            <span className= { 'b-color-added-warning' } style= {
                luminosity >= 79 ? { color: '#777777', borderColor: '#777777' } : { color: '#ffffff', borderColor: '#ffffff' }}>
                Color already on the list
            </span>
            <span className= { 'b-color-added-success'} style= {
                luminosity > 79 ? { color: '#006980', borderColor: '#006980' } : { color: '#ccf6ff', borderColor: '#ccf6ff' }}>
                Color added!
            </span>
            { this.showPercentage() }
        </div>
        <AddButton size='small' addColor={(e) => { this.postColor(e, hex) }} showSuccess= {(e) => { this.showSuccessMessage(e) }}/>
        <ul className='list-colors-codes'>
          <li className='b-copy-code_clipboard b-copy-code_hex' onClick = {e => this.handleClick(e)} data-clipboard-text={hex}>{hex}</li>
          <li className='b-copy-code_clipboard' onClick = {e => this.handleClick(e)} data-clipboard-text={rgb}>{rgb}</li>
          <li className='b-copy-code_clipboard' onClick = {e => this.handleClick(e)} data-clipboard-text={hsl}>{hsl}</li>
        </ul>
      </li>
    )
  }

  showWarning(warning) {
    warning.style.visibility = 'visible'; console.log(warning)

    this.hideWarning(warning);
  }

  hideWarning(warning) {
    setTimeout(()=>{
      warning.style.visibility = 'hidden';
    },900)
  }

  showSuccessMessage(success) {
    success.style.visibility = 'visible';
    this.hideSuccessMessage(success);
  }

  hideSuccessMessage(success) {
    setTimeout(()=>{
      success.style.visibility = 'hidden';
    },900)
  }

  handleClick(e) {
    e.persist();
    e.stopPropagation();

    const hsl = this.props.hsl;
    const luminosity = parseInt(hsl.substring(hsl.lastIndexOf(' '), hsl.lastIndexOf('%')).trim());

    if(e.target.className === 'b-color-swatch__color-area b-copy-code_clipboard' && luminosity <= 79) {
      e.target.classList.add('b-copied-white');
      setTimeout(function(){
        if (e.target.classList.contains('b-copied-white')){
          e.target.classList.remove('b-copied-white');
        }
      },600);
    }

    else if(e.target.className === 'b-color-swatch__color-area b-copy-code_clipboard') {
      e.target.classList.add('b-copied-dark');
      setTimeout(function(){
        if (e.target.classList.contains('b-copied-dark')){
          e.target.classList.remove('b-copied-dark');
        }
      },600);
    }

    else if(e.target.className === 'b-copy-code_clipboard' || e.target.className === 'b-copy-code_clipboard b-copy-code_hex') {
      e.target.classList.add('b-copied-text');
      setTimeout(function(){
        if (e.target.classList.contains('b-copied-text')){
          e.target.classList.remove('b-copied-text');
        }
      },600);
    }
  }

  showPercentage() {
    // function returns piece of UI with percentage, only if that was passed through props
    if (this.props.percentage) {
      return ( <span className='b-color-percentage'>{this.props.percentage}</span> );
    }
  }

  postColor(e, color){
    e.persist();

    color = this.props.hex;

    // selector of the warning message for a particular color swatch
    let warning = e.target.parentNode.children[0].children[0];
    let success = e.target.parentNode.children[0].children[1];

    db.table('color').toArray().then((colors) => {
      let currentColorsArray = [];

      colors.forEach((color) => {
        currentColorsArray.push(color.colorCode.color);
      });

      if(currentColorsArray.indexOf(color) < 0 ){
        this.setState({ color });

        currentColorsArray.push(color);

        this.props.addColor({ color });
        this.props.loadColors();

        this.showSuccessMessage(success);
      }

      else {
        this.showWarning(warning);
      }
    });
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addColor, loadColors }, dispatch);
}

function mapStateToProps({ addedColor }) {
  return { addedColor, loadColors }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorSwatch);
