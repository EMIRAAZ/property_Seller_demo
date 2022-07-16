import axios from '../../../utils/axios';
import {
  GET_OFFPLAN_WEB,
  GET_OFFPLAN_WEB_STARTED,
  GET_OFFPLAN_WEB_ERROR,
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
