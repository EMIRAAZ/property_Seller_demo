import { combineReducers } from 'redux';
import homeReducer from './home';
import buyReducer from './buy';
import rentReducer from './rent';
import adminloginReducer from './adminlogin';
import adminpropertyReducer from './adminproperty';
import adminagencyReducer from './adminagency';
import uploadReducer from './upload';
import adminaddpropertyReducer from './adminaddproperty';
import adminaddagencyReducer from './adminaddagency';
import adminaddagentReducer from './addadminagent';
import propertyReducer from './property';
import amenityReducer from './amenity';

const rootReducer = combineReducers({
  homeReducer,
  buyReducer,
  rentReducer,
  adminloginReducer,
  adminpropertyReducer,
  uploadReducer,
  adminaddpropertyReducer,
  propertyReducer,
  adminaddagencyReducer,
  adminagencyReducer,
  adminaddagentReducer,
  amenityReducer,
});

export default rootReducer;
