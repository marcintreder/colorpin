import React, { Component } from 'react';

class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: this.props.defaultColor, percent: 10};
  }

render(){
  return (
    <section className='color-search'>
      <span className='search-wrapper'>
        <input type='search' className='input search' value={this.state.term} onChange={event => this.onInputChange(event.target.value)} spellCheck='false'/>
      </span>
      <span className='number-wrapper'>
        <input type='number' className='input number' value={this.state.percent} onChange={event => this.onNumberChange(parseInt(event.target.value))} min='1' max='99'/>
      </span>
    </section>
  )
}

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  onNumberChange(percent) {
    this.setState({percent});
    this.props.onPercentChange(percent);
  }

}

export default Searchbar;
