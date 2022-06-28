import axios from '../../../utils/axios';
import {
  GET_HOME_PROPERTY,
  GET_HOME_PROPERTY_ERROR,
  GET_HOME_PROPERTY_STARTED,
  HOME_SEARCH_INPUT_CHANGE,
  GET_HOME_LOCATION_SEARCH,
  GET_HOME_LOCATION_SEARCH_ERROR,
  GET_HOME_LOCATION_SEARCH_STARTED,
  GET_HOME_FEATURED,
  GET_HOME_FEATURED_ERROR,
  GET_HOME_FEATURED_STARTED,
  GET_HOME_LUXURY,
  GET_HOME_LUXURY_ERROR,
  GET_HOME_LUXURY_STARTED,
  CHANGE_HOME_PROPERTY_PAGE,
  CHANGE_HOME_FEATURED_PAGE,
  CHANGE_HOME_LUXURY_PAGE,
} from '../../constants';

export const changePageHomeProperty = (payload, cb) => async dispatch => {
  dispatch({
    type: CHANGE_HOME_PROPERTY_PAGE,
    payload: payload,
  });
  if (typeof cb === 'function') {
    cb();
  }
};

export const changePageHomeFeatured = (payload, cb) => async dispatch => {
  dispatch({
    type: CHANGE_HOME_FEATURED_PAGE,
    payload: payload,
  });
  cb();
};

export const changePageHomeLuxury = (payload, cb) => async dispatch => {
  dispatch({
    type: CHANGE_HOME_LUXURY_PAGE,
    payload: payload,
  });
  cb();
};

/// home property ///

const getHomePropertyStarted = params => {
  return {
    type: GET_HOME_PROPERTY_STARTED,
    payload: params,
  };
};

const getHomePropertyError = () => {
  return {
    type: GET_HOME_PROPERTY_ERROR,
  };
};

export const getHomeProperty =
  (params = '', search) =>
  async dispatch => {
    try {
      dispatch(getHomePropertyStarted(search ? params : ''));
      const res = await axios.get(`/api/property?limit=6${params}`);
      dispatch({
        type: GET_HOME_PROPERTY,
        payload: res.data?.data,
      });
    } catch (e) {
      dispatch(getHomePropertyError());
    }
  };

/// home property ///

/// home search ///

export const onHomeSearchInputChange = payload => {
  return {
    type: HOME_SEARCH_INPUT_CHANGE,
    payload: payload,
  };
};

/// home search ///

/// home location search ///

const getHomeLocationSearchStarted = () => {
  return {
    type: GET_HOME_LOCATION_SEARCH_STARTED,
  };
};

const getHomeLocationSearchError = () => {
  return {
    type: GET_HOME_LOCATION_SEARCH_ERROR,
  };
};

export const getHomeLocationSearch = location => async dispatch => {
  try {
    dispatch(getHomeLocationSearchStarted());
    const res = await axios.post(`/api/location`, { location });
    dispatch({
      type: GET_HOME_LOCATION_SEARCH,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getHomeLocationSearchError());
  }
};

/// home location search ///

/// home featured ///

const getHomeFeaturedStarted = () => {
  return {
    type: GET_HOME_FEATURED_STARTED,
  };
};

const getHomeFeaturedError = () => {
  return {
    type: GET_HOME_FEATURED_ERROR,
  };
};

export const getHomeFeatured =
  (params = '') =>
  async dispatch => {
    try {
      dispatch(getHomeFeaturedStarted());
      const res = await axios.get(`/api/featured${params}`);
      dispatch({
        type: GET_HOME_FEATURED,
        payload: res.data?.data,
      });
    } catch (e) {
      dispatch(getHomeFeaturedError());
    }
  };

/// home featured ///

/// home luxury ///

const getHomeLuxuryStarted = () => {
  return {
    type: GET_HOME_LUXURY_STARTED,
  };
};

const getHomeLuxuryError = () => {
  return {
    type: GET_HOME_LUXURY_ERROR,
  };
};

export const getHomeLuxury =
  (params = '') =>
  async dispatch => {
    try {
      dispatch(getHomeLuxuryStarted());
      const res = await axios.get(`/api/property${params}`);
      dispatch({
        type: GET_HOME_LUXURY,
        payload: res.data?.data,
      });
    } catch (e) {
      dispatch(getHomeLuxuryError());
    }
  };

/// home luxury ///
