import axios from '../../../utils/axios';
import {
  ADD_ADMIN_PROPERTY,
  ADD_ADMIN_PROPERTY_ERROR,
  ADD_ADMIN_PROPERTY_STARTED,
  ADMIN_PROPERTY_INPUT_CHANGE,
  GET_AGENT_PROPERTY,
  GET_AGENT_PROPERTY_ERROR,
  GET_AGENT_PROPERTY_STARTED,
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

const getAgentPropertyStarted = () => {
  return {
    type: GET_AGENT_PROPERTY_STARTED,
  };
};

const getAgentPropertyError = () => {
  return {
    type: GET_AGENT_PROPERTY_ERROR,
  };
};

export const getAgentProperty = () => async dispatch => {
  try {
    dispatch(getAgentPropertyStarted());
    const res = await axios.get(`/api/agent`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_AGENT_PROPERTY,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getAgentPropertyError());
  }
};
