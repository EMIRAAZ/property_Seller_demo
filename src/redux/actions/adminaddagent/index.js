import axios from '../../../utils/axios';
import {
  GET_ADMIN_AGENT_BY_ID,
  GET_ADMIN_AGENT_BY_ID_STARTED,
  GET_ADMIN_AGENT_BY_ID_ERROR,
  ADMIN_AGENT_INPUT_CHANGE,
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
