import { LOAD_COLORS } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case LOAD_COLORS:
      return action.payload;
  }
  return state;
}
