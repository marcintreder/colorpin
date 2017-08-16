import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getColor } from '../actions/index';
import { getPercent } from '../actions/index';
import { addColor } from '../actions/index';
import { loadColors } from '../actions/index';

import AddButton from '../components/AddButton/e-add-button';
import SearchBar from '../components/SearchBar/search-bar';

import db from '../db';

class SearchBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {term: this.props.currentColor.hex, percent: this.props.currentPercent, message: 'hidden'};
    // binding context for functions
    this.onInputChange = this.onInputChange.bind(this);
    this.onNumberChange = this.onNumberChange.bind(this);
    this.postColor = this.postColor.bind(this);
  }

  render(){
    let color = this.state.term;
    return (
        <SearchBar
          addColor={(e) => this.postColor(e, color) }
          searchChange={this.onInputChange}
          percentChange={this.onNumberChange}
          searchTerm={this.state.term}
          percent={this.state.percent}
          message={this.state.message} />
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

  postColor(e, color){
    e.persist();

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

        this.setState({message: 'success'});
        setTimeout(() => {
          this.setState({message: 'hidden'})
        }, 900);
      }

      else {
        this.setState({message: 'warning'});
        setTimeout(() => {
          this.setState({message: 'hidden'})
        }, 900);
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);
