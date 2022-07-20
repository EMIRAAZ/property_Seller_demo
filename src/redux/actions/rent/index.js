import axios from '../../../utils/axios';
import {
  GET_RENT_PROPERTY,
  GET_RENT_PROPERTY_ERROR,
  GET_RENT_PROPERTY_STARTED,
  ON_CHANGE_RENT_PROPERTY_INPUT,
  GET_RENT_LOCATION_SEARCH_STARTED,
  GET_RENT_LOCATION_SEARCH,
  GET_RENT_LOCATION_SEARCH_ERROR,
} from '../../constants';

export const onChangeRentParams = payload => {
  return {
    type: ON_CHANGE_RENT_PROPERTY_INPUT,
    payload: payload,
  };
};

/// rent property ///

const getRentPropertyStarted = () => {
  return {
    type: GET_RENT_PROPERTY_STARTED,
  };
};

const getRentPropertyError = () => {
  return {
    type: GET_RENT_PROPERTY_ERROR,
  };
};

export const getRentProperty =
  (params = '') =>
  async dispatch => {
    try {
      dispatch(getRentPropertyStarted());
      const res = await axios.get(`/api/property?${params}`);
      dispatch({
        type: GET_RENT_PROPERTY,
        payload: res.data?.data,
      });
    } catch (e) {
      dispatch(getRentPropertyError());
    }
  };

/// rent property ///

const getRentLocationSearchStarted = () => {
  return {
    type: GET_RENT_LOCATION_SEARCH_STARTED,
  };
};

const getRentLocationSearchError = () => {
  return {
    type: GET_RENT_LOCATION_SEARCH_ERROR,
  };
};

export const getRentLocationSearch = location => async dispatch => {
  try {
    dispatch(getRentLocationSearchStarted());
    const res = await axios.post(`/api/location`, { location });
    dispatch({
      type: GET_RENT_LOCATION_SEARCH,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getRentLocationSearchError());
  }
};
