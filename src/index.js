import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { getColor } from './actions';
import { getPercent } from './actions';
import { loadColors } from './actions';

import reducers from './reducers';
import store from './store';

import App from './components/app';
import Search from './components/search';
import ColorDetailsFunctions from './components/color-details-functions';
import ColorDetailsComplimentary from './components/color-details-complimentary';
import ColorDetailsAccessability from './components/color-details-accessability';

import ColorFunctions from './Modules/m-color-functions';

import '../style/sass/main.scss';

// sets initial state for search
// data gets updated by calling actions with default values
// values are set as arguments of actions e.g. '#006cff'
function initialState() {
  return function(dispatch) {
    dispatch(getColor('006cff'));
    dispatch(getPercent(5));
    dispatch(loadColors());
  }
}

store.dispatch(initialState());


ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/color/:color/accessability' component={ ColorDetailsAccessability } />
          <Route path='/color/:color/complimentary' component={ ColorDetailsComplimentary } />
          <Route path='/color/:color' component={ ColorDetailsFunctions } />
          <Route path='/' component={ Search } />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
