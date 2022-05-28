import { combineReducers } from 'redux';
import homeReducer from './home';
import buyReducer from './buy';
import rentReducer from './rent';
import adminloginReducer from './adminlogin';
import adminpropertyReducer from './adminproperty';
import uploadReducer from './upload';
import adminaddpropertyReducer from './adminaddproperty';

const rootReducer = combineReducers({
  homeReducer,
  buyReducer,
  rentReducer,
  adminloginReducer,
  adminpropertyReducer,
  uploadReducer,
  adminaddpropertyReducer,
});

export default rootReducer;
