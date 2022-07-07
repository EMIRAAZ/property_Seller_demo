import axios from '../../../utils/axios';
import {
  GET_ADMIN_OFFPLAN,
  GET_ADMIN_OFFPLAN_ERROR,
  GET_ADMIN_OFFPLAN_STARTED,
  DELETE_ADMIN_OFFPLAN,
  DELETE_ADMIN_OFFPLAN_ERROR,
  DELETE_ADMIN_OFFPLAN_STARTED,
} from '../../constants';

const getAdminOffplanStarted = () => {
  return {
    type: GET_ADMIN_OFFPLAN_STARTED,
  };
};

const getAdminOffplanError = () => {
  return {
    type: GET_ADMIN_OFFPLAN_ERROR,
  };
};

export const getAdminOffplan = () => async dispatch => {
  try {
    dispatch(getAdminOffplanStarted());
    const res = await axios.get(`/api/offplan`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_ADMIN_OFFPLAN,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getAdminOffplanError());
  }
};

// delete agency

const deleteAdminOffplanStarted = () => {
  return {
    type: DELETE_ADMIN_OFFPLAN_STARTED,
  };
};

const deleteAdminOffplanError = () => {
  return {
    type: DELETE_ADMIN_OFFPLAN_ERROR,
  };
};

export const deleteAdminOffplan = (id, cb) => async dispatch => {
  try {
    dispatch(deleteAdminOffplanStarted());
    const res = await axios.delete(`/api/offplan/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: DELETE_ADMIN_OFFPLAN,
      payload: res.data?.data,
    });
    cb();
  } catch (e) {
    dispatch(deleteAdminOffplanError());
  }
};
