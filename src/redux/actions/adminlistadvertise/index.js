import axios from '../../../utils/axios';
import {
  GET_ADVERTISE_ADMIN,
  GET_ADVERTISE_ADMIN_ERROR,
  GET_ADVERTISE_ADMIN_STARTED,
} from '../../constants';

const getAdminAdvertiseStarted = () => {
  return {
    type: GET_ADVERTISE_ADMIN_STARTED,
  };
};

const getAdminAdvertiseError = () => {
  return {
    type: GET_ADVERTISE_ADMIN_ERROR,
  };
};

export const getAdminAdvertise = () => async dispatch => {
  try {
    dispatch(getAdminAdvertiseStarted());
    const res = await axios.get(`/api/advertise-with-us`);
    dispatch({
      type: GET_ADVERTISE_ADMIN,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getAdminAdvertiseError());
  }
};
