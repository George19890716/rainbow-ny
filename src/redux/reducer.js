import { combineReducers } from 'redux';
import systemReducer from './modules/system-reducer';
import houseReducer from './modules/house-reducer';

export default combineReducers({
  system: systemReducer,
  house: houseReducer
});