import axios from '../../../utils/axios';
import {
  ADD_ADMIN_AGENCY,
  ADD_ADMIN_AGENCY_ERROR,
  ADD_ADMIN_AGENCY_STARTED,
  ADMIN_AGENCY_INPUT_CHANGE,
  EDIT_ADMIN_AGENCY,
  EDIT_ADMIN_AGENCY_ERROR,
  EDIT_ADMIN_AGENCY_STARTED,
  GET_ADMIN_AGENCY_BY_ID,
  GET_ADMIN_AGENCY_BY_ID_ERROR,
  GET_ADMIN_AGENCY_BY_ID_STARTED,
  GET_ADMIN_AGENCY_AGENT,
  GET_ADMIN_AGENCY_AGENT_STARTED,
  GET_ADMIN_AGENCY_AGENT_ERROR,
  CLEAR_ADD_AGENCY,
  CLEAR_ADD_AGENT,
} from '../../constants';

export const changeAdminAgencyInput = payload => {
  return {
    type: ADMIN_AGENCY_INPUT_CHANGE,
    payload: payload,
  };
};

const addAdminAgencyStarted = () => {
  return {
    type: ADD_ADMIN_AGENCY_STARTED,
  };
};

const addAdminAgencyError = () => {
  return {
    type: ADD_ADMIN_AGENCY_ERROR,
  };
};

export const addAdminAgency = (agency, cb) => async dispatch => {
  try {
    dispatch(addAdminAgencyStarted());
    const res = await axios.post(`/api/agency`, agency, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    cb();
    dispatch({
      type: ADD_ADMIN_AGENCY,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(addAdminAgencyError());
  }
};

// edit agency

const editAdminAgencyStarted = () => {
  return {
    type: EDIT_ADMIN_AGENCY_STARTED,
  };
};

const editAdminAgencyError = () => {
  return {
    type: EDIT_ADMIN_AGENCY_ERROR,
  };
};

export const editAdminAgency = (id, agency, cb) => async dispatch => {
  try {
    dispatch(editAdminAgencyStarted());
    const res = await axios.patch(`/api/agency/${id}`, agency, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    cb();
    dispatch({
      type: EDIT_ADMIN_AGENCY,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(editAdminAgencyError());
  }
};

// edit agency

// get agency by Id

const getAdminAgencyByIdStarted = () => {
  return {
    type: GET_ADMIN_AGENCY_BY_ID_STARTED,
  };
};

const getAdminAgencyByIdError = () => {
  return {
    type: GET_ADMIN_AGENCY_BY_ID_ERROR,
  };
};

export const getAdminAgencyById = id => async dispatch => {
  try {
    dispatch(getAdminAgencyByIdStarted());
    const res = await axios.get(`/api/agency/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_ADMIN_AGENCY_BY_ID,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getAdminAgencyByIdError());
  }
};

// get agency by Id

// clear add agency

export const clearAddAgency = () => {
  return {
    type: CLEAR_ADD_AGENCY,
  };
};
export const clearAddAgent = () => {
  return {
    type: CLEAR_ADD_AGENT,
  };
};

// AGENT FOR AGENCY

const getAdminAgentByAgencyStarted = () => {
  return {
    type: GET_ADMIN_AGENCY_AGENT_STARTED,
  };
};

const getAdminAgentByAgencyError = () => {
  return {
    type: GET_ADMIN_AGENCY_AGENT_ERROR,
  };
};

export const getAdminAgentByAgency = agencyId => async dispatch => {
  try {
    dispatch(getAdminAgentByAgencyStarted());
    const res = await axios.get(`/api/agent/agency/${agencyId}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_ADMIN_AGENCY_AGENT,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getAdminAgentByAgencyError());
  }
};
