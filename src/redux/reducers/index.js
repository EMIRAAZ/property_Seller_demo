import { combineReducers } from 'redux';
import homeReducer from './home';
import buyReducer from './buy';
import rentReducer from './rent';
import adminloginReducer from './adminlogin';
import adminpropertyReducer from './adminproperty';
import adminagencyReducer from './adminagency';
import adminoffplanReducer from './adminoffplan';
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
import blogReducer from './blog';
import topReducer from './topstory';
import singlenewsReducer from './singlenews';
import blogwebReducer from './blogweb';
import listpropReducer from './listproperty';
import neighwebReducer from './neighweb';
import tagwebReducer from './tagweb';
import luxurywebReducer from './luxuryweb';
import adminaddoffplanReducer from './adminaddoffplan';
import offplanwebReducer from './offplan';
import agencyloginReducer from './agencylogin';
import agencyagentReducer from './addagencyagent';
import agencyaddpropertyReducer from './agencyaddproperty';
import agencypropertyReducer from './agencyproperty';
import agencylistagentReducer from './listagencyagent';
import advertiseReducer from './adminlistadvertise';

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
  blogReducer,
  topReducer,
  singlenewsReducer,
  blogwebReducer,
  listpropReducer,
  neighwebReducer,
  tagwebReducer,
  luxurywebReducer,
  adminoffplanReducer,
  adminaddoffplanReducer,
  offplanwebReducer,
  agencyloginReducer,
  agencyagentReducer,
  agencyaddpropertyReducer,
  agencypropertyReducer,
  agencylistagentReducer,
  advertiseReducer,
});

export default rootReducer;
