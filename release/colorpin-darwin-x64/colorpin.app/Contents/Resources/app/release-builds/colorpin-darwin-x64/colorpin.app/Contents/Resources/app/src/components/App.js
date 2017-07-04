import _ from 'lodash';
import React, { Component } from 'react';
import Luminosity from './Luminosity';
import tinycolor2 from 'tinycolor2';
import Searchbar from './Searchbar';


class App extends Component {
  constructor(props) {
   super(props);

   this.state = { id: null, defaultColor: '#006cff', defaultPercent: 10};
 }

 componentWillMount(){
   this.colorConverter(this.state.defaultColor);
   this.percentUpdater(this.state.defaultPercent);
 }

 colorConverter(color){
   //color = this.state.color;
   const t = tinycolor2(color);

   const hex = t.toHex();
   const hsl = t.toHsl();
   const rgb = t.toRgb();

   const rgbTxt = 'rgba(' + rgb['r'] + ', ' + rgb['g'] + ', ' + rgb['b'] + ', ' + 1 + ')';
   const hslTxt = 'hsl(' + Math.round(hsl['h']) + ', ' + Math.round(hsl['s'])*100 + '%' + ', ' + Math.round(hsl['l'])*100 + '%)';
   const hexTxt = '#' + hex;

   this.setState({hex: hex});
   this.setState({hsl: hsl});
   this.setState({rgb: rgb});

   this.setState({rgbTxt: rgbTxt});
   this.setState({hslTxt: hslTxt});
   this.setState({hexTxt: hexTxt});
 }

 percentUpdater(number){
   this.setState({percent: number});
 }

render(){
  const colorSearch = _.debounce((term) => {this.colorConverter(term)}, 100);
  const numberChanger = _.debounce((percent) => {this.percentUpdater(percent)}, 100);
  return (
    <div>
    <Searchbar onSearchTermChange={colorSearch} onPercentChange={numberChanger} defaultColor={this.state.defaultColor}/>
      <Luminosity hex={this.state.hex} rgbTxt={this.state.rgbTxt} hslTxt={this.state.hslTxt} hexTxt={this.state.hexTxt} percent={this.state.percent}/>
    </div>
  );
}
};

export default App;
