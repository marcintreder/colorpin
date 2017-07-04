import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SavedColors from '../containers/saved-colors';
import ColorDetailsHeader from '../components/color-details-header';
import ColorDetailsNav from '../Elements/e-color-details-nav';
import ColorComplimentary from './color-complimentary';

import { loadColors } from '../actions/index';

class ColorDetailsComplimentary extends Component {

  componentWillMount(){
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className='b-colors-details'>
        <SavedColors colors={ this.props.loadColors }/>
        <article className='b-colors-details__wrapper'>
          <ColorDetailsHeader color={ this.props.match.params.color } />
          <ColorDetailsNav color={ this.props.match.params.color } />
          <ColorComplimentary color={ this.props.match.params.color }/>
        </article>
      </div>
    );
  }
}

function mapStateToProps({ loadColors }) {
  return { loadColors }
}

export default connect(mapStateToProps)(ColorDetailsComplimentary);
