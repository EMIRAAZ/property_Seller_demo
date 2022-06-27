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
import neighborReducer from './neighborhood';
import tagheadReducer from './taghead';
import taglineReducer from './tagline';
import newstopicsReducer from './newstopics';
import newsReducer from './news';

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
  neighborReducer,
  tagheadReducer,
  taglineReducer,
  newstopicsReducer,
  newsReducer,
});

export default rootReducer;
