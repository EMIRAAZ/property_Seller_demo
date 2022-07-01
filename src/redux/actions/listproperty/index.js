import axios from '../../../utils/axios';
import {
  GET_CAT_FEATURED,
  GET_CAT_FEATURED_ERROR,
  GET_CAT_FEATURED_STARTED,
  GET_RTMIN_STARTED,
  GET_RTMIN,
  GET_RTMIN_ERROR,
  ON_CHANGE_LIST_PAGE_PROPERTY_INPUT,
  GET_LISTPROP_LOCATION_SEARCH_STARTED,
  GET_LISTPROP_LOCATION_SEARCH,
  GET_LISTPROP_LOCATION_SEARCH_ERROR,
} from '../../constants';

export const onChangeListPropParams = payload => {
  return {
    type: ON_CHANGE_LIST_PAGE_PROPERTY_INPUT,
    payload: payload,
  };
};

/// cat featured ///

const getCatFeaturedStarted = () => {
  return {
    type: GET_CAT_FEATURED_STARTED,
  };
};

const getCatFeaturedError = () => {
  return {
    type: GET_CAT_FEATURED_ERROR,
  };
};

export const getCatFeatured =
  (params = '') =>
  async dispatch => {
    try {
      dispatch(getCatFeaturedStarted());
      const res = await axios.get(`/api/featured?limit=10${params}`);
      dispatch({
        type: GET_CAT_FEATURED,
        payload: res.data?.data,
      });
    } catch (e) {
      dispatch(getCatFeaturedError());
    }
  };

/// rtmin featured ///

const getRtminFeaturedStarted = () => {
  return {
    type: GET_RTMIN_STARTED,
  };
};

const getRtminFeaturedError = () => {
  return {
    type: GET_RTMIN_ERROR,
  };
};

export const getRtmin =
  (params = '') =>
  async dispatch => {
    try {
      dispatch(getRtminFeaturedStarted());
      const res = await axios.get(
        `/api/property?readyToMove=true&&limit=10${params}`
      );
      dispatch({
        type: GET_RTMIN,
        payload: res.data?.data,
      });
    } catch (e) {
      dispatch(getRtminFeaturedError());
    }
  };

const getListpropLocationSearchStarted = () => {
  return {
    type: GET_LISTPROP_LOCATION_SEARCH_STARTED,
  };
};

const getListpropLocationSearchError = () => {
  return {
    type: GET_LISTPROP_LOCATION_SEARCH_ERROR,
  };
};

export const getListpropLocationSearch = location => async dispatch => {
  try {
    dispatch(getListpropLocationSearchStarted());
    const res = await axios.post(`/api/location`, { location });
    dispatch({
      type: GET_LISTPROP_LOCATION_SEARCH,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getListpropLocationSearchError());
  }
};
