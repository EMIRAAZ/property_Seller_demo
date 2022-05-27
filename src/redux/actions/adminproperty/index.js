import axios from '../../../utils/axios';
import {
  GET_ADMIN_PROPERTY,
  GET_ADMIN_PROPERTY_ERROR,
  GET_ADMIN_PROPERTY_STARTED,
} from '../../constants';

const getAdminPropertyStarted = () => {
  return {
    type: GET_ADMIN_PROPERTY_STARTED,
  };
};

const getAdminPropertyError = () => {
  return {
    type: GET_ADMIN_PROPERTY_ERROR,
  };
};

export const getAdminProperty =
  (params = '') =>
  async dispatch => {
    try {
      dispatch(getAdminPropertyStarted());
      const res = await axios.get(`/api/property${params}`);
      dispatch({
        type: GET_ADMIN_PROPERTY,
        payload: res.data?.data,
      });
    } catch (e) {
      dispatch(getAdminPropertyError());
    }
  };
