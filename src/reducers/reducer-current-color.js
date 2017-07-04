import { GET_COLOR } from '../actions/index';

export default function(state = '#006cff', action) {
  switch (action.type) {
    case GET_COLOR:
      return action.payload;
  }
  return state;
}
