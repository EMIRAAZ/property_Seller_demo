import axios from '../../../utils/axios';
import {
  GET_ADMIN_AGENT_BY_ID,
  GET_ADMIN_AGENT_BY_ID_STARTED,
  GET_ADMIN_AGENT_BY_ID_ERROR,
  ADMIN_AGENT_INPUT_CHANGE,
  ADD_ADMIN_AGENT,
  ADD_ADMIN_AGENT_STARTED,
  ADD_ADMIN_AGENT_ERROR,
  EDIT_ADMIN_AGENT,
  EDIT_ADMIN_AGENT_STARTED,
  EDIT_ADMIN_AGENT_ERROR,
} from '../../constants';

export const changeAdminAgentInput = payload => {
  return {
    type: ADMIN_AGENT_INPUT_CHANGE,
    payload: payload,
  };
};

const getAgentByIdStarted = () => {
  return {
    type: GET_ADMIN_AGENT_BY_ID_STARTED,
  };
};

const getAgentByIdError = () => {
  return {
    type: GET_ADMIN_AGENT_BY_ID_ERROR,
  };
};

export const getAdminAgentById = () => async dispatch => {
  try {
    dispatch(getAgentByIdStarted());
    const res = await axios.get(`/api/agent`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_ADMIN_AGENT_BY_ID,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getAgentByIdError());
  }
};

// add agent

const addAdminAgentStarted = () => {
  return {
    type: ADD_ADMIN_AGENT_STARTED,
  };
};

const addAdminAgentError = () => {
  return {
    type: ADD_ADMIN_AGENT_ERROR,
  };
};

export const addAdminAgent = (agent, cb) => async dispatch => {
  try {
    dispatch(addAdminAgentStarted());
    const res = await axios.post(`/api/register-agent`, agent, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    cb();
    dispatch({
      type: ADD_ADMIN_AGENT,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(addAdminAgentError());
  }
};

// edit agent

const editAdminAgentStarted = () => {
  return {
    type: EDIT_ADMIN_AGENT_STARTED,
  };
};

const editAdminAgentError = () => {
  return {
    type: EDIT_ADMIN_AGENT_ERROR,
  };
};

export const editAdminAgent = (id, agent, cb) => async dispatch => {
  try {
    dispatch(editAdminAgentStarted());
    const res = await axios.patch(`/api/agent/${id}`, agent, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    cb();
    dispatch({
      type: EDIT_ADMIN_AGENT,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(editAdminAgentError());
  }
};
