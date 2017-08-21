import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { History } from 'react-router'; // responsible for Reach Router Props warning
import tinycolor2 from 'tinycolor2';

import { deleteColor, loadColors } from '../../actions/index';

import ColorSwatchSmallContainer from '../ColorSwatchSmallContainer/color-swatch-small-container';
import ColorSwatchSmall from '../../components/ColorSwatchSmall/color-swatch-small';
import NavSearchButton from '../../components/NavSearchButton/nav-search-button';
import { SavedColorsHeader, ColorsList, NavWrapper } from './saved-colors-list.styles';

class SavedColors extends Component {
  constructor(props) {
    super(props);
    this.state = { id: null };
    this.onDelete = this.onDelete.bind(this);
  }
  // sets context for React Router. Necessary for redirects after deleting colors
  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
  };
  }

  render() {
    let colorsArr = this.props.colors;
    let idDeleted = this.state.id;

    if(!colorsArr) {
      // loader
      return (<div>Loading...</div>)
    }

    if (idDeleted) {
      // cleans up the array used for renderin list after deleting
      for(var i=0; i<colorsArr.length; i++){
        if (colorsArr[i].id === idDeleted) {
          colorsArr.splice(i,1);
        }
      }
    }

    return (
      <NavWrapper>
          <NavSearchButton />
          <SavedColorsHeader>
            Your Colors:
          </SavedColorsHeader>
          <ColorsList>
          {
            colorsArr.length > 0 ? colorsArr.map((item) =>
            this.renderSavedList(item)) :
            (<ColorSwatchSmall empty />)
          }
        </ColorsList>
      </NavWrapper>
    )
  }

  renderSavedList(item) {
    // Renders list of small swatches
    const t = tinycolor2(item.colorCode.color);
    const hex = t.toHexString();
    let id = item.id;

    return (
      <li key={ id }>
          <ColorSwatchSmallContainer hex={hex} id={id} delete={(e) => { this.onDelete(id, e, hex); }}/>
      </li>
    )
  }

  onDelete(id, e, hex){
    e.persist();
    this.setState({id: id});
    this.props.deleteColor(id);

    this.onDeleteRedirect(e, hex);
  }

  onDeleteRedirect(e, hex) {
    const deletingColor = hex.replace(/\#/g, '');
    const currentPath = this.context.router.route.location.pathname;

    // Application will only redirect user to search if the current color is being deleted
    if (currentPath.includes(deletingColor)) {
      this.context.router.history.push('/');
      this.props.loadColors();
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
