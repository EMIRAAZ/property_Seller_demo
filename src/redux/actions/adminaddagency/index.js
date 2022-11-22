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
  ADD_LOGO_AGENCY_STARTED,
  ADD_LOGO_AGENCY,
  ADD_LOGO_AGENCY_ERROR,
  DELETE_LOGO_AGENCY_STARTED,
  DELETE_LOGO_AGENCY,
  DELETE_LOGO_AGENCY_ERROR,
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

//IMAGE

const addAgencyLogoStarted = payload => {
  return {
    type: ADD_LOGO_AGENCY_STARTED,
  };
};
const addAgencyLogoError = payload => {
  return {
    type: ADD_LOGO_AGENCY_ERROR,
  };
};

export const addAgencyLogo = payload => async dispatch => {
  try {
    dispatch(addAgencyLogoStarted());
    const res = await axios.post(`/image/upload-single`, payload);
    dispatch({
      type: ADD_LOGO_AGENCY,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(addAgencyLogoError());
  }
};
const deleteAgencyLogoStarted = payload => {
  return {
    type: DELETE_LOGO_AGENCY_STARTED,
  };
};
const deleteAgencyLogoError = payload => {
  return {
    type: DELETE_LOGO_AGENCY_ERROR,
  };
};

export const deleteAgencyLogo = id => async dispatch => {
  const newId = id;
  try {
    dispatch(deleteAgencyLogoStarted());
    await axios.delete(
      `/image/delete-single-image/${newId.split('/uploads/').pop()}`
    );
    dispatch({
      type: DELETE_LOGO_AGENCY,
      payload: id,
    });
  } catch (e) {
    if (e.response?.data?.message === 'No file exist') {
      dispatch({
        type: DELETE_LOGO_AGENCY,
        payload: id,
      });
    } else dispatch(deleteAgencyLogoError());
  }
};
