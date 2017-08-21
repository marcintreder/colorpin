import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SavedColorsList from '../containers/SavedColorsList/saved-colors-list';
import ColorDetailsHeader from '../components/color-details-header';
import ColorDetailsNav from '../Elements/e-color-details-nav';
import ColorFunctions from '../Modules/m-color-functions';

import { loadColors } from '../actions/index';

class ColorDetailsFunctions extends Component {

  componentWillMount(){
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className='b-colors-details'>
        <SavedColorsList colors={ this.props.loadColors }/>
        <article className='b-colors-details__wrapper'>
          <ColorDetailsHeader color={this.props.match.params.color} />
          <ColorDetailsNav color={this.props.match.params.color} />
          <ColorFunctions color={this.props.match.params.color}/>
        </article>
      </div>
    );
  }
}

function mapStateToProps({ loadColors }) {
  return { loadColors }
}

export default connect(mapStateToProps)(ColorDetailsFunctions);
