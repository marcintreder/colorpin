// The list of Saved Colors expects an object with a list of colors.
// This component only renders the list and dispatches actions

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { History } from 'react-router';
import tinycolor2 from 'tinycolor2';

import { deleteColor } from '../actions/index';
import { loadColors } from '../actions/index';

import ColorSwatchSmall from '../Elements/e-color-swatch-small';
import SearchNav from '../Elements/e-search-nav-button';

class SavedColors extends Component {
  constructor(props) {
    super(props);

    this.state = { id: null };

    this.onDelete = this.onDelete.bind(this);
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
  };
  }


  renderSavedList(item) {
    const t = tinycolor2(item.colorCode.color);
    const hex = t.toHexString();
    let id = item.id;

    return (
      <li key={ id }>
          <ColorSwatchSmall data={hex} id={id} delete={this.onDelete}/>
      </li>
    )
  }


  render() {
    let colorsArr = this.props.colors;

    let idDeleted = this.state.id;

    if (idDeleted) {
      for(var i=0; i<colorsArr.length; i++){
        if (colorsArr[i].id === idDeleted) {
          colorsArr.splice(i,1);
        }
      }
    }

    if(!colorsArr) {
      return (<div>Loading...</div>)
    }

    if(!colorsArr.length) {
      return (
        <nav>
            <SearchNav />
            <h3 className='b-saved-colors-list__header'>Your Colors:</h3>
            <div className='b-saved-colors-list-scroller_up' onMouseMove={() => { this.goUp() }}></div>
            <ul className='b-saved-colors-list' onWheel={(e) => { this.wheel(e) }}>
              <li className='b-empty-swatch__small--wrapper'>
                <span className='b-empty-swatch__small'></span>
                <span className='b-empty-swatch__small--label'>Add first color</span>
              </li>
            </ul>
            <div className='b-saved-colors-list-scroller_down' onMouseMove={() => { this.goDown() }}></div>
        </nav>
      )
    }

    return (
      <nav>
          <SearchNav />
          <h3 className='b-saved-colors-list__header'>Your Colors:</h3>
          <div className='b-saved-colors-list-scroller_up' onMouseMove={() => { this.goUp() }}></div>
          <ul className='b-saved-colors-list' onWheel={(e) => { this.wheel(e) }}>
          { colorsArr.map((item) =>
            this.renderSavedList(item)
          )}
          </ul>
          <div className='b-saved-colors-list-scroller_down' onMouseMove={() => { this.goDown() }}></div>
      </nav>
    )
  }

  onDelete(id, e){
    e.persist();

    if (e.target.style.opacity === '1') { // checks if user hovered over delete button
      this.setState({id: id});
      this.props.deleteColor(id);

      this.onDeleteRedirect(e);
    }
  }

  onDeleteRedirect(e) {

    const deletingColor = tinycolor2(e.target.previousElementSibling.firstChild.style.backgroundColor)
                          .toHexString().replace(/\#/g, '');
    const currentPath = this.context.router.route.location.pathname;

    // Application will only redirect user to search if the current color is being deleted
    if (currentPath.includes(deletingColor)) {
      this.context.router.history.push('/');
      this.props.loadColors();
    }


  }

  wheel(e) {
    e.preventDefault();

    let list = document.getElementsByClassName('b-saved-colors-list');

    if (e.deltaY <= 0 && list[0].scrollTop !== 0) {
      this.goUp();
    }

    else if (e.deltaY >= 0 && !(list[0].scrollTop === (list[0].scrollHeight - list[0].offsetHeight))) {
      this.goDown();

    }
  }

  goDown() {
    let list = document.getElementsByClassName('b-saved-colors-list');

    if (! (list[0].scrollTop === (list[0].scrollHeight - list[0].offsetHeight))) {
      let list = document.getElementsByClassName('b-saved-colors-list');
      list[0].scrollTop += 130;
    }
  }

  goUp() {
    let list = document.getElementsByClassName('b-saved-colors-list');

    if (list[0].scrollTop !== 0) {
      list[0].scrollTop -= 30;
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadColors, deleteColor}, dispatch);
}

function mapStateToProps({ currentColor, deletedColor, loadColors }) {
  return { currentColor, deletedColor, loadColors }
}

//pure: false - fixes react router

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(SavedColors);
