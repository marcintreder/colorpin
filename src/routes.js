import React from 'react';
import { BrowserRouter, Route, IndexRoute } from 'react-router';


import App from './components/app';
import Search from './components/search';
//import ColorDetails from './components/color-details';
import ColorFunctions from './Modules/m-color-functions';
import ColorComplimentary from './components/color-complimentary';
import ColorAccessability from './components/color-accessability';


export default (
  <Route path='/' component={ App }>
      <IndexRoute component ={ Search } />
        <Route path='/color/:color' component={ ColorFunctions } />
          <Route path='/color/:color/complimentary' component={ ColorComplimentary } />
          <Route path='/color/:color/accessability' component={ ColorAccessability } />
  </Route>
);
