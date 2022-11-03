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
  GET_PROPERTY_NEIGHBORHOOD_SALE,
  GET_PROPERTY_NEIGHBORHOOD_SALE_STARTED,
  GET_PROPERTY_NEIGHBORHOOD_SALE_ERROR,
  GET_VP_STARTED,
  GET_VP_ERROR,
  GET_VP,
  GET_PROP_TAG_STARTED,
  GET_PROP_TAG,
  GET_PROP_TAG_ERROR,
} from '../../constants';

export const onChangePropsList = payload => {
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
      const res = await axios.get(`/api/featured?${params}`);
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
      const res = await axios.get(`/api/property?${params}&readyToMove=true`);
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
      keyword: location,
    });
  } catch (e) {
    dispatch(getListpropLocationSearchError());
  }
};

const getPropWithNeighSaleStarted = () => {
  return {
    type: GET_PROPERTY_NEIGHBORHOOD_SALE_STARTED,
  };
};

const getPropWithNeighSaleError = () => {
  return {
    type: GET_PROPERTY_NEIGHBORHOOD_SALE_ERROR,
  };
};

export const getPropWithNeighSale = param => async dispatch => {
  try {
    dispatch(getPropWithNeighSaleStarted());
    const res = await axios.get(`/api/property?${param}`);
    dispatch({
      type: GET_PROPERTY_NEIGHBORHOOD_SALE,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getPropWithNeighSaleError());
  }
};

/// VP ///

const getVPStarted = () => {
  return {
    type: GET_VP_STARTED,
  };
};

const getVPError = () => {
  return {
    type: GET_VP_ERROR,
  };
};

export const getVP =
  (params = '') =>
  async dispatch => {
    try {
      dispatch(getVPStarted());
      const res = await axios.get(`/api/property?${params}&verified=true`);
      dispatch({
        type: GET_VP,
        payload: res.data?.data,
      });
    } catch (e) {
      dispatch(getVPError());
    }
  };

const getPROP_TAGStarted = () => {
  return {
    type: GET_PROP_TAG_STARTED,
  };
};

const getPROP_TAGError = () => {
  return {
    type: GET_PROP_TAG_ERROR,
  };
};

export const getPropWithTag =
  (params = '') =>
  async dispatch => {
    try {
      dispatch(getPROP_TAGStarted());
      const res = await axios.get(`/api/property?${params}`);
      dispatch({
        type: GET_PROP_TAG,
        payload: res.data?.data,
      });
    } catch (e) {
      dispatch(getPROP_TAGError());
    }
  };
