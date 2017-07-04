import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPercent } from '../actions/index';
import ColorSwatch from '../components/c-color-swatch';
import SearchPercentage from './search-percentage';

import tinycolor2 from 'tinycolor2';

class ColorFunctionsDarker extends Component {

  generateDarkerList() {
    let percentage = this.props.currentPercent;

    const t = tinycolor2(this.props.color);

    const hslObj = t.toHsl();
    let colorH = hslObj.h;
    let colorL = hslObj.l * 100;
    let colorS = hslObj.s * 100;

    let darkerArr = [];

    for(var i = 0; i < 100; i = i + percentage) {
      let currentPercent = i + '%';

      let darker = colorL - i;
      let darkColor = tinycolor2('hsl(' + colorH + ', ' + colorS + '%, ' + darker + '%)');
      let darkHex = darkColor.toHexString();
      let darkRgb = darkColor.toRgbString();
      let darkHsl = darkColor.toHslString();
      darkerArr.push([darkHex, darkRgb, darkHsl, currentPercent]);
    }

    return darkerArr;
  }

  renderDarkerList(item) {
    const hex = item[0];
    const rgb = item[1];
    const hsl = item[2];
    const percentage = item[3];

    return (
      <ColorSwatch
        hex={hex}
        rgb={rgb}
        hsl={hsl}
        percentage={percentage}
        key={percentage} />
    )
  }

  render(){
    let darkerArr = this.generateDarkerList();

    const t = tinycolor2(this.props.color);


    const hex = t.toHexString();
    const rgb = t.toRgbString();
    const hsl = t.toHslString();

    const percentage = 10;

    return(
      <section>
        <h2 className='section-header'>Darker</h2>
        <ul className='component-list'>

          <ColorSwatch hex={hex}
          rgb={rgb}
          hsl={hsl}
          percentage={'0%'} />

        {darkerArr.map((item, i) =>
            i > 0 && darkerArr[i][0] !== darkerArr[i-1][0]
            ? this.renderDarkerList(item) : '')}
        </ul>
      </section>
    );
  }
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getPercent }, dispatch);
  }

  function mapStateToProps({ currentPercent }) {
    return { currentPercent }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(ColorFunctionsDarker);
