import axios from '../../../utils/axios';
import {
  GET_NEWSTOPICS_ADMIN,
  GET_NEWSTOPICS_ADMIN_ERROR,
  GET_NEWSTOPICS_ADMIN_STARTED,
  ADMIN_NEWSTOPICS_INPUT_CHANGE,
  ADD_ADMIN_NEWSTOPICS,
  ADD_ADMIN_NEWSTOPICS_STARTED,
  ADD_ADMIN_NEWSTOPICS_ERROR,
  EDIT_ADMIN_NEWSTOPICS,
  EDIT_ADMIN_NEWSTOPICS_STARTED,
  EDIT_ADMIN_NEWSTOPICS_ERROR,
  GET_NEWSTOPICS_ADMIN_BY_ID,
  GET_NEWSTOPICS_ADMIN_ERROR_BY_ID,
  CLEAR_ADD_NEWSTOPICS,
  GET_NEWSTOPICS_ADMIN_STARTED_BY_ID,
  DELETE_ADMIN_NEWSTOPICS,
  DELETE_ADMIN_NEWSTOPICS_STARTED,
  DELETE_ADMIN_NEWSTOPICS_ERROR,
} from '../../constants';

export const changeAdminNewsTopicsInput = payload => {
  return {
    type: ADMIN_NEWSTOPICS_INPUT_CHANGE,
    payload: payload,
  };
};

const getNewsTopicsAdminStarted = () => {
  return {
    type: GET_NEWSTOPICS_ADMIN_STARTED,
  };
};

const getNewsTopicsAdminError = () => {
  return {
    type: GET_NEWSTOPICS_ADMIN_ERROR,
  };
};

export const getNewsTopicsAdmin = () => async dispatch => {
  try {
    dispatch(getNewsTopicsAdminStarted());
    const res = await axios.get(`/api/newstopics`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_NEWSTOPICS_ADMIN,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getNewsTopicsAdminError());
  }
};

// add newstopics

const addAdminNewsTopicsStarted = () => {
  return {
    type: ADD_ADMIN_NEWSTOPICS_STARTED,
  };
};

const addAdminNewsTopicsError = () => {
  return {
    type: ADD_ADMIN_NEWSTOPICS_ERROR,
  };
};

export const addAdminNewsTopics = (newstopics, cb) => async dispatch => {
  try {
    dispatch(addAdminNewsTopicsStarted());
    const res = await axios.post(`/api/newstopics`, newstopics, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    cb();
    dispatch({
      type: ADD_ADMIN_NEWSTOPICS,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(addAdminNewsTopicsError());
  }
};

// edit newstopics

const editAdminNewsTopicsStarted = () => {
  return {
    type: EDIT_ADMIN_NEWSTOPICS_STARTED,
  };
};

const editAdminNewsTopicsError = () => {
  return {
    type: EDIT_ADMIN_NEWSTOPICS_ERROR,
  };
};

export const editAdminNewsTopics = (id, newstopics, cb) => async dispatch => {
  try {
    dispatch(editAdminNewsTopicsStarted());
    const res = await axios.patch(`/api/newstopics/${id}`, newstopics, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    cb();
    dispatch({
      type: EDIT_ADMIN_NEWSTOPICS,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(editAdminNewsTopicsError());
  }
};

// getById newstopics

const getByIdAdminNewsTopicsStarted = () => {
  return {
    type: GET_NEWSTOPICS_ADMIN_STARTED_BY_ID,
  };
};

const getByIdAdminNewsTopicsError = () => {
  return {
    type: GET_NEWSTOPICS_ADMIN_ERROR_BY_ID,
  };
};

export const getByIdAdminNewsTopics = id => async dispatch => {
  try {
    dispatch(getByIdAdminNewsTopicsStarted());
    const res = await axios.get(`/api/newstopics/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_NEWSTOPICS_ADMIN_BY_ID,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getByIdAdminNewsTopicsError());
  }
};

export const clearAddNewsTopics = () => {
  return {
    type: CLEAR_ADD_NEWSTOPICS,
  };
};

// delete newstopics

const deleteAdminNewsTopicsStarted = () => {
  return {
    type: DELETE_ADMIN_NEWSTOPICS_STARTED,
  };
};

const deleteAdminNewsTopicsError = () => {
  return {
    type: DELETE_ADMIN_NEWSTOPICS_ERROR,
  };
};

export const deleteAdminNewsTopics = (id, cb) => async dispatch => {
  try {
    dispatch(deleteAdminNewsTopicsStarted());
    const res = await axios.delete(`/api/newstopics/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: DELETE_ADMIN_NEWSTOPICS,
      payload: res.data?.data,
    });
    cb();
  } catch (e) {
    dispatch(deleteAdminNewsTopicsError());
  }
};
