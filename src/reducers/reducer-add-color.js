import { ADD_COLOR } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case ADD_COLOR:
      return action.payload;
  }
  return state;
}
