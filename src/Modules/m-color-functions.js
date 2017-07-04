import React, { Component } from 'react';

import ColorFunctionsLighter from '../containers/color-functions-lighter';
import ColorFunctionsDarker from '../containers/color-functions-darker';


export default class ColorFunctions extends Component {

  componentWillMount(){
    window.scrollTo(0, 0);
  }

  componentDidUpdate(){
    window.scrollTo(0, 0);
  }

  render() {
    return(
      <div className='b-functions-list b-color-details-all__wrapper'>
        <ColorFunctionsLighter color={ this.props.color } className='b-functions-list__item' />
        <ColorFunctionsDarker color={ this.props.color } className='b-functions-list__item' />
      </div>
    )
  }
}
