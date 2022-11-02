import axios from '../../../utils/axios';
import {
  GET_HOME_PROPERTY,
  GET_HOME_PROPERTY_ERROR,
  GET_HOME_PROPERTY_STARTED,
  HOME_SEARCH_INPUT_CHANGE,
  GET_HOME_LOCATION_SEARCH,
  GET_HOME_LOCATION_SEARCH_ERROR,
  GET_HOME_LOCATION_SEARCH_STARTED,
  CLEAR_HOME_PROPERTY,
} from '../../constants';

export const clearHomeProperty = params => {
  return {
    type: CLEAR_HOME_PROPERTY,
  };
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
      const res = await axios.get(`/api/property?${params}`);
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
      keyword: location,
    });
  } catch (e) {
    dispatch(getHomeLocationSearchError());
  }
};

/// home location search ///
