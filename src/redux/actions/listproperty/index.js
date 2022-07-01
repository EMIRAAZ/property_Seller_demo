import axios from '../../../utils/axios';
import {
  GET_CAT_FEATURED,
  GET_CAT_FEATURED_ERROR,
  GET_CAT_FEATURED_STARTED,
  GET_RTMIN_STARTED,
  GET_RTMIN,
  GET_RTMIN_ERROR,
} from '../../constants';

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
