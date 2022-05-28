import axios from '../../../utils/axios';
import {
  ADD_ADMIN_PROPERTY,
  ADD_ADMIN_PROPERTY_ERROR,
  ADD_ADMIN_PROPERTY_STARTED,
  ADMIN_PROPERTY_INPUT_CHANGE,
} from '../../constants';

export const changeAdminPropertyInput = payload => {
  return {
    type: ADMIN_PROPERTY_INPUT_CHANGE,
    payload: payload,
  };
};

const addAdminPropertyStarted = () => {
  return {
    type: ADD_ADMIN_PROPERTY_STARTED,
  };
};

const addAdminPropertyError = () => {
  return {
    type: ADD_ADMIN_PROPERTY_ERROR,
  };
};

export const addAdminProperty = property => async dispatch => {
  try {
    dispatch(addAdminPropertyStarted());
    const res = await axios.post(`/api/property`, property);
    dispatch({
      type: ADD_ADMIN_PROPERTY,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(addAdminPropertyError());
  }
};
