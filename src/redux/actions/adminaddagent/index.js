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
  DELETE_ADMIN_AGENT,
  DELETE_ADMIN_AGENT_STARTED,
  DELETE_ADMIN_AGENT_ERROR,
  ADD_AGENT_IMAGE_STARTED,
  ADD_AGENT_IMAGE,
  ADD_AGENT_IMAGE_ERROR,
  DELETE_AGENT_IMAGE_STARTED,
  DELETE_AGENT_IMAGE,
  DELETE_AGENT_IMAGE_ERROR,
  CLEAR_AGENT_DATA,
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

export const getAdminAgentById = id => async dispatch => {
  try {
    dispatch(getAgentByIdStarted());
    const res = await axios.get(`/api/agent/${id}`, {
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

// delete agent

const deleteAdminAgentStarted = () => {
  return {
    type: DELETE_ADMIN_AGENT_STARTED,
  };
};

const deleteAdminAgentError = () => {
  return {
    type: DELETE_ADMIN_AGENT_ERROR,
  };
};

export const deleteAdminAgent = (id, cb) => async dispatch => {
  try {
    dispatch(deleteAdminAgentStarted());
    const res = await axios.delete(`/api/agent/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: DELETE_ADMIN_AGENT,
      payload: res.data?.data,
    });
    cb();
  } catch (e) {
    dispatch(deleteAdminAgentError());
  }
};

//IMAGE

const addAgentImageStarted = payload => {
  return {
    type: ADD_AGENT_IMAGE_STARTED,
  };
};
const addAgentImageError = payload => {
  return {
    type: ADD_AGENT_IMAGE_ERROR,
  };
};

export const addAgentImage = payload => async dispatch => {
  try {
    dispatch(addAgentImageStarted());
    const res = await axios.post(`/image/upload-single`, payload);
    dispatch({
      type: ADD_AGENT_IMAGE,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(addAgentImageError());
  }
};
const deleteAgentImageStarted = payload => {
  return {
    type: DELETE_AGENT_IMAGE_STARTED,
  };
};
const deleteAgentImageError = payload => {
  return {
    type: DELETE_AGENT_IMAGE_ERROR,
  };
};

export const deleteAgentImage = id => async dispatch => {
  const newId = id;
  try {
    dispatch(deleteAgentImageStarted());
    await axios.delete(
      `/image/delete-single-image/${newId.split('/uploads/').pop()}`
    );
    dispatch({
      type: DELETE_AGENT_IMAGE,
      payload: id,
    });
  } catch (e) {
    console.log(e);
    if (e.response?.data?.message === 'No file exist') {
      dispatch({
        type: DELETE_AGENT_IMAGE,
        payload: id,
      });
    } else dispatch(deleteAgentImageError());
  }
};

export const clearAgent = () => {
  return {
    type: CLEAR_AGENT_DATA,
  };
};
