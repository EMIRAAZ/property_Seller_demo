import axios from '../../../utils/axios';
import {
  GET_AGENCY_AGENT_BY_ID,
  GET_AGENCY_AGENT_BY_ID_STARTED,
  GET_AGENCY_AGENT_BY_ID_ERROR,
  AGENCY_AGENT_INPUT_CHANGE,
  ADD_AGENCY_AGENT,
  ADD_AGENCY_AGENT_STARTED,
  ADD_AGENCY_AGENT_ERROR,
  EDIT_AGENCY_AGENT,
  EDIT_AGENCY_AGENT_STARTED,
  EDIT_AGENCY_AGENT_ERROR,
  DELETE_AGENCY_AGENT,
  DELETE_AGENCY_AGENT_STARTED,
  DELETE_AGENCY_AGENT_ERROR,
} from '../../constants';

export const changeAgencyAgentInput = payload => {
  return {
    type: AGENCY_AGENT_INPUT_CHANGE,
    payload: payload,
  };
};

const getAgentByIdStarted = () => {
  return {
    type: GET_AGENCY_AGENT_BY_ID_STARTED,
  };
};

const getAgentByIdError = () => {
  return {
    type: GET_AGENCY_AGENT_BY_ID_ERROR,
  };
};

export const getAgencyAgentById = id => async dispatch => {
  try {
    dispatch(getAgentByIdStarted());
    const res = await axios.get(`/api/agent/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_AGENCY_AGENT_BY_ID,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getAgentByIdError());
  }
};

// add agent

const addAgencyAgentStarted = () => {
  return {
    type: ADD_AGENCY_AGENT_STARTED,
  };
};

const addAgencyAgentError = () => {
  return {
    type: ADD_AGENCY_AGENT_ERROR,
  };
};

export const addAgencyAgent = (agent, cb) => async dispatch => {
  try {
    dispatch(addAgencyAgentStarted());
    const res = await axios.post(`/api/register-agent`, agent, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    cb();
    dispatch({
      type: ADD_AGENCY_AGENT,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(addAgencyAgentError());
  }
};

// edit agent

const editAgencyAgentStarted = () => {
  return {
    type: EDIT_AGENCY_AGENT_STARTED,
  };
};

const editAgencyAgentError = () => {
  return {
    type: EDIT_AGENCY_AGENT_ERROR,
  };
};

export const editAgencyAgent = (id, agent, cb) => async dispatch => {
  try {
    dispatch(editAgencyAgentStarted());
    const res = await axios.patch(`/api/agent/${id}`, agent, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    cb();
    dispatch({
      type: EDIT_AGENCY_AGENT,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(editAgencyAgentError());
  }
};

// delete agent

const deleteAgencyAgentStarted = () => {
  return {
    type: DELETE_AGENCY_AGENT_STARTED,
  };
};

const deleteAgencyAgentError = () => {
  return {
    type: DELETE_AGENCY_AGENT_ERROR,
  };
};

export const deleteAgencyAgent = (id, cb) => async dispatch => {
  try {
    dispatch(deleteAgencyAgentStarted());
    const res = await axios.delete(`/api/agent/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: DELETE_AGENCY_AGENT,
      payload: res.data?.data,
    });
    cb();
  } catch (e) {
    dispatch(deleteAgencyAgentError());
  }
};
