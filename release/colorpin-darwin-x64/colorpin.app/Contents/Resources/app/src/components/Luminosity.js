import React, { Component } from 'react';
import tinycolor2 from 'tinycolor2';

class Luminosity extends Component {

  generateChangedColors() {

    const color = this.props.hex;

    let percentage = this.props.percent; // config percentage of color difference

    const t = tinycolor2(color);
    const hsl = t.toHsl();

    const colorH = hsl['h'];
    const colorS = hsl['s'] * 100;
    const colorL = hsl['l'] * 100;

    let lightenArr = [];
    let darkenArr = [];
    let satArr = [];
    let desatArr = [];

    for(var i = 0; i < 100; i = i + percentage) {
      let percentageTxt = i + '%';

      let lighten = colorL + i;
      let lightColor = tinycolor2('hsl(' + colorH + ', ' + colorS + '%, ' + lighten + '%)');
      let lightHex = lightColor.toHexString();
      let lightRgb = lightColor.toRgbString();
      let lightHsl = lightColor.toHslString();
      lightenArr.push([lightHex, lightRgb, lightHsl, percentageTxt]);

      let darken = colorL - i;
      let darkColor = tinycolor2('hsl(' + colorH + ', ' + colorS + '%, ' + darken + '%)');
      let darkHex = darkColor.toHexString();
      let darkRgb = darkColor.toRgbString();
      let darkHsl = darkColor.toHslString();
      darkenArr.push([darkHex, darkRgb, darkHsl, percentageTxt]);


      let saturate = colorS + i;
      let satColor = tinycolor2('hsl(' + colorH + ', ' + saturate + '%, ' + colorL + '%)');
      let satHex = satColor.toHexString();
      let satRgb = satColor.toRgbString();
      let satHsl = satColor.toHslString();
      satArr.push([satHex, satRgb, satHsl, percentageTxt]);

      let desaturate = colorS - i;
      let desatColor = tinycolor2('hsl(' + colorH + ', ' + desaturate + '%, ' + colorL + '%)');
      let desatHex = desatColor.toHexString();
      let desatRgb = desatColor.toRgbString();
      let desatHsl = desatColor.toHslString();
      desatArr.push([desatHex, desatRgb, desatHsl, percentageTxt]);
    }

    return [lightenArr, darkenArr, satArr, desatArr];
  }

  render() {

    let percent = this.props.percent;

    const colorArr = this.generateChangedColors();
    const lightenArr = colorArr[0];
    const darkenArr = colorArr[1];
    const satArr = colorArr[2];
    const desatArr = colorArr[3];

    const currentHex = this.props.hexTxt;
    const currentRgb = this.props.rgbTxt;
    const currentHsl = this.props.hslTxt;

    return (
      <section className='all-colors-list'>
        <h2 className='section-header'>Lighter</h2>

        <ul className='component-list'>

        <li className='list-item-color'
        style={currentHex !== '#ffffff' ? {borderColor: currentHex } : {borderColor: '#e6e6e6'}}>
        <span className='color-swatch' style={
          currentHex !== '#ffffff' ?
            {backgroundColor: currentHex, borderColor: currentHex} :
            {backgroundColor: currentHex, borderColor: '#e6e6e6'}}>
          <span className='color-percentage'>0%</span>
        </span>
          <ul className='list-colors-codes'>
            <li>{currentHex}</li>
            <li>{currentRgb}</li>
            <li>{currentHsl}</li>
          </ul>
        </li>
        {lightenArr.map(function(item, i){
        if(i > 0 && lightenArr[i][0] !== lightenArr[i-1][0]){
            return (
              <li key={i} className='list-item-color'>
              <span className='color-swatch' style={
                item[0] !== '#ffffff' ?
                  {backgroundColor: item[0], borderColor: item[0]} :
                  {backgroundColor: item[0], borderColor: '#f3f3f3'}}>
                <span className='color-percentage'>{item[3]}</span>
              </span>
                <ul className='list-colors-codes'>
                  <li>{item[0]}</li>
                  <li>{item[1]}</li>
                  <li>{item[2]}</li>
                </ul>
              </li>
            )
        }
        })}
        </ul>

        <h2 className='section-header'>Darker</h2>
        <ul className='component-list'>

          <li className='list-item-color'
          style={currentHex !== '#ffffff' ? {borderColor: currentHex } : {borderColor: '#e6e6e6'}}>
          <span className='color-swatch' style={
            currentHex !== '#ffffff' ?
              {backgroundColor: currentHex, borderColor: currentHex} :
              {backgroundColor: currentHex, borderColor: '#e6e6e6'}}>
            <span className='color-percentage'>0%</span>
          </span>
            <ul className='list-colors-codes'>
              <li>{currentHex}</li>
              <li>{currentRgb}</li>
              <li>{currentHsl}</li>
            </ul>
          </li>

        {darkenArr.map(function(item, i){
          if(i > 0 && darkenArr[i][0] !== darkenArr[i-1][0]){
            return <li key={i} className='list-item-color'>
            <span className='color-swatch' style={
              item[0] !== '#ffffff' ?
                {backgroundColor: item[0], borderColor: item[0]} :
                {backgroundColor: item[0], borderColor: '#f3f3f3'}}>
              <span className='color-percentage'>{item[3]}</span>
            </span>
              <ul className='list-colors-codes'>
                <li>{item[0]}</li>
                <li>{item[1]}</li>
                <li>{item[2]}</li>
              </ul>
            </li>
          }
        })}
        </ul>

        <h2 className='section-header'>Saturated</h2>
        <ul className='component-list'>

          <li className='list-item-color'
          style={currentHex !== '#ffffff' ? {borderColor: currentHex } : {borderColor: '#e6e6e6'}}>
          <span className='color-swatch' style={
            currentHex !== '#ffffff' ?
              {backgroundColor: currentHex, borderColor: currentHex} :
              {backgroundColor: currentHex, borderColor: '#e6e6e6'}}>
            <span className='color-percentage'>0%</span>
          </span>
            <ul className='list-colors-codes'>
              <li>{currentHex}</li>
              <li>{currentRgb}</li>
              <li>{currentHsl}</li>
            </ul>
          </li>

        {satArr.map(function(item, i){
          if(i > 0 && satArr[i][0] !== satArr[i-1][0]){
            return <li key={i} className='list-item-color'>
            <span className='color-swatch' style={
              item[0] !== '#ffffff' ?
                {backgroundColor: item[0], borderColor: item[0]} :
                {backgroundColor: item[0], borderColor: '#f3f3f3'}}>
              <span className='color-percentage'>{item[3]}</span>
            </span>
              <ul className='list-colors-codes'>
                <li>{item[0]}</li>
                <li>{item[1]}</li>
                <li>{item[2]}</li>
              </ul>
            </li>
          }
        })}
        </ul>

        <h2 className='section-header'>Desaturated</h2>
        <ul className='component-list'>

          <li className='list-item-color'
          style={currentHex !== '#ffffff' ? {borderColor: currentHex } : {borderColor: '#e6e6e6'}}>
          <span className='color-swatch' style={
            currentHex !== '#ffffff' ?
              {backgroundColor: currentHex, borderColor: currentHex} :
              {backgroundColor: currentHex, borderColor: '#e6e6e6'}}>
            <span className='color-percentage'>0%</span>
          </span>
            <ul className='list-colors-codes'>
              <li>{currentHex}</li>
              <li>{currentRgb}</li>
              <li>{currentHsl}</li>
            </ul>
          </li>

        {desatArr.map(function(item, i){
          if(i > 0 && desatArr[i][0] !== desatArr[i-1][0]){
            return <li key={i} className='list-item-color'>
            <span className='color-swatch' style={
              item[0] !== '#ffffff' ?
                {backgroundColor: item[0], borderColor: item[0]} :
                {backgroundColor: item[0], borderColor: '#f3f3f3'}}>
              <span className='color-percentage'>{item[3]}</span>
            </span>
              <ul className='list-colors-codes'>
                <li>{item[0]}</li>
                <li>{item[1]}</li>
                <li>{item[2]}</li>
              </ul>
            </li>
          }
        })}
      </ul>

    </section>
    );
  }

}

export default Luminosity;
