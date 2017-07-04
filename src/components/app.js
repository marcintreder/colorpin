import React, { Component } from 'react';

import Search from './search';

export default class App extends Component {
  constructor(props) {
   super(props);

   this.state = { id: null };
 }

render(){
  return (
    <main>
      <Search />
    </main>
  );
}
};
