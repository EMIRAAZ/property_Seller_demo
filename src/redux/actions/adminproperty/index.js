import axios from '../../../utils/axios';
import {
  GET_ADMIN_PROPERTY,
  GET_ADMIN_PROPERTY_ERROR,
  GET_ADMIN_PROPERTY_STARTED,
  DELETE_ADMIN_PROPERTY,
  DELETE_ADMIN_PROPERTY_ERROR,
  DELETE_ADMIN_PROPERTY_STARTED,
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

// delete property

const deleteAdminPropertyStarted = () => {
  return {
    type: DELETE_ADMIN_PROPERTY_STARTED,
  };
};

const deleteAdminPropertyError = () => {
  return {
    type: DELETE_ADMIN_PROPERTY_ERROR,
  };
};

export const deleteAdminProperty = (id, cb) => async dispatch => {
  try {
    dispatch(deleteAdminPropertyStarted());
    const res = await axios.delete(`/api/property/${id}`);
    dispatch({
      type: DELETE_ADMIN_PROPERTY,
      payload: res.data?.data,
    });
    cb();
  } catch (e) {
    dispatch(deleteAdminPropertyError());
  }
};
