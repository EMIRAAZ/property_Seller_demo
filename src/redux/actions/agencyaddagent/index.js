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
  ADD_AGENCY_AGENT_IMAGE,
  ADD_AGENCY_AGENT_IMAGE_STARTED,
  ADD_AGENCY_AGENT_IMAGE_ERROR,
  DELETE_AGENCY_AGENT_IMAGE,
  DELETE_AGENCY_AGENT_IMAGE_STARTED,
  DELETE_AGENCY_AGENT_IMAGE_ERROR,
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

//IMAGE

const addAgencyAgentImageStarted = payload => {
  return {
    type: ADD_AGENCY_AGENT_IMAGE_STARTED,
  };
};
const addAgencyAgentImageError = payload => {
  return {
    type: ADD_AGENCY_AGENT_IMAGE_ERROR,
  };
};

export const addAgencyAgentImage = payload => async dispatch => {
  try {
    dispatch(addAgencyAgentImageStarted());
    const res = await axios.post(`/image/upload-single`, payload);
    dispatch({
      type: ADD_AGENCY_AGENT_IMAGE,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(addAgencyAgentImageError());
  }
};
const deleteAgencyAgentImageStarted = payload => {
  return {
    type: DELETE_AGENCY_AGENT_IMAGE_STARTED,
  };
};
const deleteAgencyAgentImageError = payload => {
  return {
    type: DELETE_AGENCY_AGENT_IMAGE_ERROR,
  };
};

export const deleteAgencyAgentImage = id => async dispatch => {
  const newId = id;
  try {
    dispatch(deleteAgencyAgentImageStarted());
    await axios.delete(
      `/image/delete-single-image/${newId.split('/uploads/').pop()}`
    );
    dispatch({
      type: DELETE_AGENCY_AGENT_IMAGE,
      payload: id,
    });
  } catch (e) {
    console.log(e);
    if (e.response?.data?.message === 'No file exist') {
      dispatch({
        type: DELETE_AGENCY_AGENT_IMAGE,
        payload: id,
      });
    } else dispatch(deleteAgencyAgentImageError());
  }
};
