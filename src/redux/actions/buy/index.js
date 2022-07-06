import axios from '../../../utils/axios';
import {
  GET_BUY_PROPERTY,
  GET_BUY_PROPERTY_ERROR,
  GET_BUY_PROPERTY_STARTED,
  ON_CHANGE_BUY_PROPERTY_INPUT,
  GET_BUY_LOCATION_SEARCH_STARTED,
  GET_BUY_LOCATION_SEARCH,
  GET_BUY_LOCATION_SEARCH_ERROR,
} from '../../constants';

export const onChangeBuyParams = payload => {
  return {
    type: ON_CHANGE_BUY_PROPERTY_INPUT,
    payload: payload,
  };
};

/// buy property ///

const getBuyPropertyStarted = () => {
  return {
    type: GET_BUY_PROPERTY_STARTED,
  };
};

const getBuyPropertyError = () => {
  return {
    type: GET_BUY_PROPERTY_ERROR,
  };
};

export const getBuyProperty =
  (params = '') =>
  async dispatch => {
    try {
      dispatch(getBuyPropertyStarted());
      const res = await axios.get(`/api/property?sale=buy${params}`);
      dispatch({
        type: GET_BUY_PROPERTY,
        payload: res.data?.data,
      });
    } catch (e) {
      dispatch(getBuyPropertyError());
    }
  };

/// buy property ///

/// buy location search ///

const getBuyLocationSearchStarted = () => {
  return {
    type: GET_BUY_LOCATION_SEARCH_STARTED,
  };
};

const getBuyLocationSearchError = () => {
  return {
    type: GET_BUY_LOCATION_SEARCH_ERROR,
  };
};

export const getBuyLocationSearch = location => async dispatch => {
  try {
    dispatch(getBuyLocationSearchStarted());
    const res = await axios.post(`/api/location`, { location });
    dispatch({
      type: GET_BUY_LOCATION_SEARCH,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getBuyLocationSearchError());
  }
};
