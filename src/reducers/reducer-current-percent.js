import { GET_PERCENT } from '../actions/index';

export default function(state = 10, action) {
  switch (action.type) {
    case GET_PERCENT:
      return action.payload;
  }
  return state;
}
