import { UPDATE_COLORS } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case UPDATE_COLORS:
      return action.payload;
  }
  return state;
}
