import axios from '../../../utils/axios';
import {
  GET_OFFPLAN_WEB,
  GET_OFFPLAN_WEB_STARTED,
  GET_OFFPLAN_WEB_ERROR,
  GET_OFFPLAN_BY_ID,
  GET_OFFPLAN_BY_ID_STARTED,
  GET_OFFPLAN_BY_ID_ERROR,
} from '../../constants';

const getOffplanStarted = () => {
  return {
    type: GET_OFFPLAN_WEB_STARTED,
  };
};

const getOffplanError = () => {
  return {
    type: GET_OFFPLAN_WEB_ERROR,
  };
};

export const getOffplanWeb = () => async dispatch => {
  try {
    dispatch(getOffplanStarted());
    const res = await axios.get(`/api/offplan`);
    dispatch({
      type: GET_OFFPLAN_WEB,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getOffplanError());
  }
};

// offplan by id

const getOffplanByIdStarted = () => {
  return {
    type: GET_OFFPLAN_BY_ID_STARTED,
  };
};

const getOffplanByIdError = () => {
  return {
    type: GET_OFFPLAN_BY_ID_ERROR,
  };
};

export const getOffplanByIdWeb = id => async dispatch => {
  try {
    dispatch(getOffplanByIdStarted());
    const res = await axios.get(`/api/offplan/${id}`);
    dispatch({
      type: GET_OFFPLAN_BY_ID,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getOffplanByIdError());
  }
};
