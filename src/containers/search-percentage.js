import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPercent } from '../actions/index';

class SearchPercentage extends Component {

  constructor(props) {
    super(props);

    this.state = { percent: this.props.currentPercent };

    // binding context for functions
    this.onNumberChange = this.onNumberChange.bind(this);
  }

  render() {
    return(
      <span className='number-wrapper'>
        <input type='number' className='input number' value={this.state.percent} onChange={this.onNumberChange} min='1' max='99'/>
      </span>
    )
  }

  onNumberChange(event) {
    let percent = parseInt(event.target.value);
    this.setState({ percent });

    this.props.getPercent(percent);
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPercent }, dispatch);
}

function mapStateToProps({ currentPercent }) {
  return { currentPercent }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPercentage);
