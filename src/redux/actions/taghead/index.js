import axios from '../../../utils/axios';
import {
  GET_TAGHEAD_ADMIN,
  GET_TAGHEAD_ADMIN_ERROR,
  GET_TAGHEAD_ADMIN_STARTED,
  ADMIN_TAGHEAD_INPUT_CHANGE,
  ADD_ADMIN_TAGHEAD,
  ADD_ADMIN_TAGHEAD_STARTED,
  ADD_ADMIN_TAGHEAD_ERROR,
  EDIT_ADMIN_TAGHEAD,
  EDIT_ADMIN_TAGHEAD_STARTED,
  EDIT_ADMIN_TAGHEAD_ERROR,
  GET_TAGHEAD_ADMIN_BY_ID,
  GET_TAGHEAD_ADMIN_ERROR_BY_ID,
  CLEAR_ADD_TAGHEAD,
  GET_TAGHEAD_ADMIN_STARTED_BY_ID,
  DELETE_ADMIN_TAGHEAD,
  DELETE_ADMIN_TAGHEAD_STARTED,
  DELETE_ADMIN_TAGHEAD_ERROR,
} from '../../constants';

export const changeAdminTagHeadInput = payload => {
  return {
    type: ADMIN_TAGHEAD_INPUT_CHANGE,
    payload: payload,
  };
};

const getTagHeadAdminStarted = () => {
  return {
    type: GET_TAGHEAD_ADMIN_STARTED,
  };
};

const getTagHeadAdminError = () => {
  return {
    type: GET_TAGHEAD_ADMIN_ERROR,
  };
};

export const getTagHeadAdmin = () => async dispatch => {
  try {
    dispatch(getTagHeadAdminStarted());
    const res = await axios.get(`/api/taghead`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_TAGHEAD_ADMIN,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getTagHeadAdminError());
  }
};

// add taghead

const addAdminTagHeadStarted = () => {
  return {
    type: ADD_ADMIN_TAGHEAD_STARTED,
  };
};

const addAdminTagHeadError = () => {
  return {
    type: ADD_ADMIN_TAGHEAD_ERROR,
  };
};

export const addAdminTagHead = (taghead, cb) => async dispatch => {
  try {
    dispatch(addAdminTagHeadStarted());
    const res = await axios.post(`/api/taghead`, taghead, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    cb();
    dispatch({
      type: ADD_ADMIN_TAGHEAD,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(addAdminTagHeadError());
  }
};

// edit taghead

const editAdminTagHeadStarted = () => {
  return {
    type: EDIT_ADMIN_TAGHEAD_STARTED,
  };
};

const editAdminTagHeadError = () => {
  return {
    type: EDIT_ADMIN_TAGHEAD_ERROR,
  };
};

export const editAdminTagHead = (id, taghead, cb) => async dispatch => {
  try {
    dispatch(editAdminTagHeadStarted());
    const res = await axios.patch(`/api/taghead/${id}`, taghead, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    cb();
    dispatch({
      type: EDIT_ADMIN_TAGHEAD,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(editAdminTagHeadError());
  }
};

// getById taghead

const getByIdAdminTagHeadStarted = () => {
  return {
    type: GET_TAGHEAD_ADMIN_STARTED_BY_ID,
  };
};

const getByIdAdminTagHeadError = () => {
  return {
    type: GET_TAGHEAD_ADMIN_ERROR_BY_ID,
  };
};

export const getByIdAdminTagHead = id => async dispatch => {
  try {
    dispatch(getByIdAdminTagHeadStarted());
    const res = await axios.get(`/api/taghead/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_TAGHEAD_ADMIN_BY_ID,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getByIdAdminTagHeadError());
  }
};

export const clearAddTagHead = () => {
  return {
    type: CLEAR_ADD_TAGHEAD,
  };
};

// delete taghead

const deleteAdminTagHeadStarted = () => {
  return {
    type: DELETE_ADMIN_TAGHEAD_STARTED,
  };
};

const deleteAdminTagHeadError = () => {
  return {
    type: DELETE_ADMIN_TAGHEAD_ERROR,
  };
};

export const deleteAdminTagHead = (id, cb) => async dispatch => {
  try {
    dispatch(deleteAdminTagHeadStarted());
    const res = await axios.delete(`/api/taghead/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: DELETE_ADMIN_TAGHEAD,
      payload: res.data?.data,
    });
    cb();
  } catch (e) {
    dispatch(deleteAdminTagHeadError());
  }
};
