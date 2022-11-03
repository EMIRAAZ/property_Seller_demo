import axios from '../../../utils/axios';
import {
  GET_AGENCY_PROPERTY,
  GET_AGENCY_PROPERTY_ERROR,
  GET_AGENCY_PROPERTY_STARTED,
  DELETE_AGENCY_PROPERTY,
  DELETE_AGENCY_PROPERTY_ERROR,
  DELETE_AGENCY_PROPERTY_STARTED,
} from '../../constants';

const getAgencyPropertyStarted = () => {
  return {
    type: GET_AGENCY_PROPERTY_STARTED,
  };
};

const getAgencyPropertyError = () => {
  return {
    type: GET_AGENCY_PROPERTY_ERROR,
  };
};

export const getAgencyProperty =
  (params = '') =>
  async dispatch => {
    try {
      dispatch(getAgencyPropertyStarted());
      const res = await axios.get(`/api/agency/property${params}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('authToken'),
        },
      });
      dispatch({
        type: GET_AGENCY_PROPERTY,
        payload: res.data?.data,
      });
    } catch (e) {
      dispatch(getAgencyPropertyError());
    }
  };

// delete property

const deleteAgencyPropertyStarted = () => {
  return {
    type: DELETE_AGENCY_PROPERTY_STARTED,
  };
};

const deleteAgencyPropertyError = () => {
  return {
    type: DELETE_AGENCY_PROPERTY_ERROR,
  };
};

export const deleteAgencyProperty = (id, cb) => async dispatch => {
  try {
    dispatch(deleteAgencyPropertyStarted());
    const res = await axios.delete(`/api/property/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: DELETE_AGENCY_PROPERTY,
      payload: res.data?.data,
    });
    cb();
  } catch (e) {
    dispatch(deleteAgencyPropertyError());
  }
};
