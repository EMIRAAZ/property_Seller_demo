import axios from '../../../utils/axios';
import {
  GET_TAGLINE_WEB,
  GET_TAGLINE_WEB_ERROR,
  GET_TAGLINE_WEB_STARTED,
  GET_TAGHEAD_WEB,
  GET_TAGHEAD_WEB_ERROR,
  GET_TAGHEAD_WEB_STARTED,
} from '../../constants';

const getTagHeadWebStarted = () => {
  return {
    type: GET_TAGHEAD_WEB_STARTED,
  };
};

const getTagHeadWebError = () => {
  return {
    type: GET_TAGHEAD_WEB_ERROR,
  };
};

export const getTagHeadWeb = () => async dispatch => {
  try {
    dispatch(getTagHeadWebStarted());
    const res = await axios.get(`/api/taghead?limit=3`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_TAGHEAD_WEB,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getTagHeadWebError());
  }
};

const getTagLineWebStarted = () => {
  return {
    type: GET_TAGLINE_WEB_STARTED,
  };
};

const getTagLineWebError = () => {
  return {
    type: GET_TAGLINE_WEB_ERROR,
  };
};

export const getTagLineWeb = id => async dispatch => {
  try {
    dispatch(getTagLineWebStarted());
    const res = await axios.get(`/api/tagline?limit=4`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_TAGLINE_WEB,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getTagLineWebError());
  }
};
