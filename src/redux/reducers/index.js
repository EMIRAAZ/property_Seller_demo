import { combineReducers } from 'redux';
import homeReducer from './home';
import buyReducer from './buy';
import rentReducer from './rent';

const rootReducer = combineReducers({
  homeReducer,
  buyReducer,
  rentReducer,
});

export default rootReducer;
