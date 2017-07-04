import { DELETE_COLOR } from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_COLOR:
      return _.omit(state, action.payload);
  }
  return state;
}
