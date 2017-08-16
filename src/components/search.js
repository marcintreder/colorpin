import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ColorsList from '../containers/colors-list';
import SearchBarContainer from '../containers/search_bar';
import SavedColors from '../containers/saved-colors';

import { loadColors } from '../actions/index';


export class Search extends Component {

  componentWillMount(){
    window.scrollTo(0, 0);
  }

  render(){
    return (
      <div className='wrapper'>
        <SavedColors colors={ this.props.loadColors }/>
        <section className='content'>
          <SearchBarContainer />
          <ColorsList />
        </section>
      </div>
    );
  }
}



function mapStateToProps({ loadColors }) {
  return { loadColors }
}

export default connect(mapStateToProps)(Search);
