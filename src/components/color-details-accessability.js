import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';

import tinycolor2 from 'tinycolor2';

import SavedColors from '../containers/saved-colors';
import ColorDetailsHeader from '../components/color-details-header';
import ColorDetailsNav from '../Elements/e-color-details-nav';

import { loadColors } from '../actions/index';

class ColorDetailsAccessability extends Component {
  constructor(props) {
    super(props);
    this.state = { colorsList: this.loadData() }

    this.loadData = this.loadData.bind(this);
  }


  loadData() {
    let colors = this.props.loadColors;

    if (colors) {
      return colors;
    }

    else {
      return this.props.loadColors;
    }
  }

  componentWillMount(){
    window.scrollTo(0, 0);

    this.setState({ colorsList: this.loadData() });
  }

  render() {

    let activeColor = this.props.match.params.color;
    let colorsList = this.loadData();

    let accessabilityList = this.getContrast(activeColor, colorsList);

    return (
      <div className='b-colors-details'>
        <SavedColors colors={ this.props.loadColors }/>
        <article className='b-colors-details__wrapper'>
          <ColorDetailsHeader color={ activeColor } />
          <ColorDetailsNav color={ activeColor } />
          <section className='b-color-details-all__wrapper'>
            <h2 className='section-header b-header-accessability'>Contrast Analysis
              <span>Web Content Accessibility Guidelines (WCAG) 2.1
                defines how to make Web content more accessible to people with disabilities.
                <br />The following analysis of contrast is based on WCAG criteria. For details
                  please read <a href='https://www.w3.org/TR/WCAG21/' target='_newtab'>WCAG 2.1</a>
              </span>
            </h2>

            <table>
                <thead>
                  <tr>
                    <th>Background</th>
                    <th>Foreground</th>
                    <th>Contrast Ratio</th>
                    <th>AA Small</th>
                    <th>AAA Small</th>
                    <th>AA Large</th>
                    <th>AAA Large</th>
                  </tr>
                </thead>
                <tbody>
                  { this.generateList(accessabilityList) }
                </tbody>
              </table>
          </section>
        </article>
      </div>
    );
  }

  getContrast(activeColor, colorsList){

    activeColor = '#' + activeColor;

    let accessabilityList = [];

    if(colorsList){
      colorsList.forEach((item, index) => {
        if( item.colorCode.color !== activeColor ){
          let aaSmall = tinycolor2.isReadable(activeColor, item.colorCode.color, {level:"AA",size:"small"});
          let aaaSmall = tinycolor2.isReadable(activeColor, item.colorCode.color, {level:"AAA",size:"small"});
          let aaLarge = tinycolor2.isReadable(activeColor, item.colorCode.color, {level:"AA",size:"large"});
          let aaaLarge = tinycolor2.isReadable(activeColor, item.colorCode.color, {level:"AAA",size:"large"});
          let contrast = tinycolor2.readability(activeColor, item.colorCode.color).toFixed(2);

            accessabilityList.push({
              color: activeColor,
              contrastColor: `#${item.colorCode.color}`,
              aaSmall: aaSmall,
              aaaSmall: aaaSmall,
              aaLarge: aaLarge,
              aaaLarge: aaaLarge,
              contrast: contrast
            })
        }
      })
    }
    return accessabilityList;
  }

  generateList(accessabilityList) {
    if (!accessabilityList.length) {
      return (
        <tr className='b-colors-details--warning'>
          <td>
            <span>Please add at least one more color to <strong>your colors </strong>
            to analyze the contrast. <br />
            You can start with Color Functions or
            Complimentary Colors or simply get back to search.
            </span>
          </td>
        </tr>
      )
    }
    return (
      accessabilityList.map((item, index) => {
        const url = item.contrastColor.replace(/\#/g, ''); // deletes # for url

        return (
                <tr key={ index }>

                  <td>
                      <div className='b-swatch__accessability--back-for-color'>
                        <span className='b-swatch__accessability'
                          style= {{backgroundColor: item.color}}/>
                        <figcaption>{ item.color }</figcaption>
                      </div>
                </td>
                <td>
                  <NavLink to={ `/color/${url}/accessability` } className='b-swatch__accessability--back-for-color--link'>
                    <div className='b-swatch__accessability--back-for-color'>
                      <span className='b-swatch__accessability'
                        style= {{backgroundColor: item.contrastColor}}/>
                      <figcaption>{ item.contrastColor }</figcaption>
                    </div>
                  </NavLink>
                  </td>

                  <td>
                    <div className='b-swatch__accessability--contrast'>
                      { item.contrast }
                    </div>
                  </td>

                  <td className='b-swatch__accessability--wcag'>
                    <div className='b-swatch__accessability--wcag--wrapper'>
                      <span className='b-swatch__accessability'
                      style= {{backgroundColor: item.color}}/>
                      <span className='b-swatch__accessability--wcag--test' style={{color: item.contrastColor, fontSize: '12px', paddingTop: '4px' }}>Aaa</span>
                      <figcaption style={item.aaSmall ? {color: '#00b39b'} : {color: '#e60036'}}>{ item.aaSmall ? 'Pass' : 'Fail'  }</figcaption>
                    </div>
                  </td>

                  <td className='b-swatch__accessability--wcag'>
                    <div className='b-swatch__accessability--wcag--wrapper'>
                      <span className='b-swatch__accessability'
                        style= {{backgroundColor: item.color}}/>
                      <span className='b-swatch__accessability--wcag--test' style={{color: item.contrastColor, fontSize: '12px', paddingTop: '4px' }}>Aaa</span>
                      <figcaption style={item.aaaSmall ? {color: '#00b39b'} : {color: '#e60036'}}>{ item.aaaSmall ? 'Pass' : 'Fail' }</figcaption>
                    </div>
                  </td>

                  <td className='b-swatch__accessability--wcag'>
                    <div className='b-swatch__accessability--wcag--wrapper'>
                      <span className='b-swatch__accessability'
                        style= {{backgroundColor: item.color}}/>
                      <span className='b-swatch__accessability--wcag--test' style={{color: item.contrastColor, fontSize: '18px'}}>Aaa</span>
                      <figcaption style={item.aaLarge ? {color: '#00b39b'} : {color: '#e60036'}}>{ item.aaLarge ? 'Pass' : 'Fail' }</figcaption>
                    </div>
                  </td>

                  <td className='b-swatch__accessability--wcag'>
                    <div className='b-swatch__accessability--wcag--wrapper'>
                      <span className='b-swatch__accessability'
                        style= {{backgroundColor: item.color}}/>
                      <span className='b-swatch__accessability--wcag--test' style={{color: item.contrastColor, fontSize: '18px'}}>Aaa</span>
                      <figcaption style={item.aaaLarge ? {color: '#00b39b'} : {color: '#e60036'}}>{ item.aaaLarge ? 'Pass' : 'Fail' }</figcaption>
                    </div>
                  </td>
              </tr>
      )
    })
  )
  }
}

function mapStateToProps({ loadColors }) {
  return { loadColors }
}

export default connect(mapStateToProps)(ColorDetailsAccessability);
