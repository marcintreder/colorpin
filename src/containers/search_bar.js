import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getColor } from '../actions/index';
import { getPercent } from '../actions/index';
import { addColor } from '../actions/index';
import { loadColors } from '../actions/index';

import AddButton from '../Elements/e-add-button';
import InputSearch from '../Elements/e-input-search';
import InputPercentage from '../Elements/e-input-percentage';

import db from '../db';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: this.props.currentColor.hex, percent: this.props.currentPercent};
    // binding context for functions
    this.onInputChange = this.onInputChange.bind(this);
    this.onNumberChange = this.onNumberChange.bind(this);
    this.postColor = this.postColor.bind(this);
  }

  render(){
    let color = this.state.term;

    return (
      <div className='color-search'>
        <AddButton addColor={(e) => this.postColor(e, color) } size='big'/>
        <InputSearch term={this.state.term} change={this.onInputChange} />
        <InputPercentage percent={this.state.percent} change={this.onNumberChange} />
        <span className='b-color-search-warning'>Color already on the list</span>
      </div>
    )
  }

  onInputChange(event) {
    let term = event.target.value;
    this.setState({ term });

    this.props.getColor(term);
  }

  onNumberChange(event) {
    let percent = parseInt(event.target.value);
    this.setState({ percent });

    this.props.getPercent(percent);
  }

  showWarning(warning) {
    warning.style.visibility = 'visible';

    this.hideWarning(warning);
  }

  hideWarning(warning) {
    setTimeout(()=>{
      warning.style.visibility = 'hidden';
    },900)
  }

  postColor(e, color){
    e.persist();

    // selector of the warning message for a particular color swatch
    let warning = e.target.parentNode.lastChild;

    db.table('color').toArray().then((colors) => {
      let currentColorsArray = [];

      colors.forEach((color) => {
        currentColorsArray.push(color.colorCode.color);
      });

      if(currentColorsArray.indexOf(color) < 0 ){
        this.setState({ color });

        currentColorsArray.push(color);

        this.props.addColor({color});
        this.props.loadColors();
      }

      else {
        this.showWarning(warning);
      }
    });
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getColor, getPercent, addColor, loadColors }, dispatch);
}

function mapStateToProps({ currentColor, currentPercent, addedColor }) {
  return { currentColor, currentPercent, addedColor, loadColors }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
