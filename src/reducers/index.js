import { combineReducers } from 'redux';
import CurrentColorReducer from './reducer-current-color';
import CurrentPercentReducer from './reducer-current-percent';
import AddedColor from './reducer-add-color';
import LoadColors from './reducer-load-colors';
import DeletedColor from './reducer-delete-color';
import UpdateColor from './reducer-update-colors';


const rootReducer = combineReducers({
  currentColor: CurrentColorReducer,
  currentPercent: CurrentPercentReducer,
  addedColor: AddedColor,
  deletedColor: DeletedColor,
  updateColor: UpdateColor,
  loadColors: LoadColors
});

export default rootReducer;
