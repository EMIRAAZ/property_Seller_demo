import axios from '../../../utils/axios';
import {
  GET_ADMIN_AGENCY,
  GET_ADMIN_AGENCY_ERROR,
  GET_ADMIN_AGENCY_STARTED,
  DELETE_ADMIN_AGENCY,
  DELETE_ADMIN_AGENCY_ERROR,
  DELETE_ADMIN_AGENCY_STARTED,
} from '../../constants';

const getAdminAgencyStarted = () => {
  return {
    type: GET_ADMIN_AGENCY_STARTED,
  };
};

const getAdminAgencyError = () => {
  return {
    type: GET_ADMIN_AGENCY_ERROR,
  };
};

export const getAdminAgency = () => async dispatch => {
  try {
    dispatch(getAdminAgencyStarted());
    const res = await axios.get(`/api/agency`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_ADMIN_AGENCY,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getAdminAgencyError());
  }
};

// delete agency

const deleteAdminAgencyStarted = () => {
  return {
    type: DELETE_ADMIN_AGENCY_STARTED,
  };
};

const deleteAdminAgencyError = () => {
  return {
    type: DELETE_ADMIN_AGENCY_ERROR,
  };
};

export const deleteAdminAgency = (id, cb) => async dispatch => {
  try {
    dispatch(deleteAdminAgencyStarted());
    const res = await axios.delete(`/api/agency/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: DELETE_ADMIN_AGENCY,
      payload: res.data?.data,
    });
    cb();
  } catch (e) {
    dispatch(deleteAdminAgencyError());
  }
};
