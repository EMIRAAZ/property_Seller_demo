import axios from '../../../utils/axios';
import {
  GET_TAGLINE_ADMIN,
  GET_TAGLINE_ADMIN_ERROR,
  GET_TAGLINE_ADMIN_STARTED,
  ADMIN_TAGLINE_INPUT_CHANGE,
  ADD_ADMIN_TAGLINE,
  ADD_ADMIN_TAGLINE_STARTED,
  ADD_ADMIN_TAGLINE_ERROR,
  EDIT_ADMIN_TAGLINE,
  EDIT_ADMIN_TAGLINE_STARTED,
  EDIT_ADMIN_TAGLINE_ERROR,
  GET_TAGLINE_ADMIN_BY_ID,
  GET_TAGLINE_ADMIN_ERROR_BY_ID,
  CLEAR_ADD_TAGLINE,
  GET_TAGLINE_ADMIN_STARTED_BY_ID,
  DELETE_ADMIN_TAGLINE,
  DELETE_ADMIN_TAGLINE_STARTED,
  DELETE_ADMIN_TAGLINE_ERROR,
  GET_TAGHEAD_TAGLINE,
  GET_TAGHEAD_TAGLINE_STARTED,
  GET_TAGHEAD_TAGLINE_ERROR,
} from '../../constants';

export const changeAdminTagLineInput = payload => {
  return {
    type: ADMIN_TAGLINE_INPUT_CHANGE,
    payload: payload,
  };
};

const getTagLineAdminStarted = () => {
  return {
    type: GET_TAGLINE_ADMIN_STARTED,
  };
};

const getTagLineAdminError = () => {
  return {
    type: GET_TAGLINE_ADMIN_ERROR,
  };
};

export const getTagLineAdmin = () => async dispatch => {
  try {
    dispatch(getTagLineAdminStarted());
    const res = await axios.get(`/api/tagline`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_TAGLINE_ADMIN,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getTagLineAdminError());
  }
};

// add tagline

const addAdminTagLineStarted = () => {
  return {
    type: ADD_ADMIN_TAGLINE_STARTED,
  };
};

const addAdminTagLineError = () => {
  return {
    type: ADD_ADMIN_TAGLINE_ERROR,
  };
};

export const addAdminTagLine = (tagline, cb) => async dispatch => {
  try {
    dispatch(addAdminTagLineStarted());
    const res = await axios.post(`/api/tagline`, tagline, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    cb();
    dispatch({
      type: ADD_ADMIN_TAGLINE,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(addAdminTagLineError());
  }
};

// edit tagline

const editAdminTagLineStarted = () => {
  return {
    type: EDIT_ADMIN_TAGLINE_STARTED,
  };
};

const editAdminTagLineError = () => {
  return {
    type: EDIT_ADMIN_TAGLINE_ERROR,
  };
};

export const editAdminTagLine = (id, tagline, cb) => async dispatch => {
  try {
    dispatch(editAdminTagLineStarted());
    const res = await axios.patch(`/api/tagline/${id}`, tagline, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    cb();
    dispatch({
      type: EDIT_ADMIN_TAGLINE,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(editAdminTagLineError());
  }
};

// getById tagline

const getByIdAdminTagLineStarted = () => {
  return {
    type: GET_TAGLINE_ADMIN_STARTED_BY_ID,
  };
};

const getByIdAdminTagLineError = () => {
  return {
    type: GET_TAGLINE_ADMIN_ERROR_BY_ID,
  };
};

export const getByIdAdminTagLine = id => async dispatch => {
  try {
    dispatch(getByIdAdminTagLineStarted());
    const res = await axios.get(`/api/tagline/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_TAGLINE_ADMIN_BY_ID,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getByIdAdminTagLineError());
  }
};

export const clearAddTagLine = () => {
  return {
    type: CLEAR_ADD_TAGLINE,
  };
};

// delete tagline

const deleteAdminTagLineStarted = () => {
  return {
    type: DELETE_ADMIN_TAGLINE_STARTED,
  };
};

const deleteAdminTagLineError = () => {
  return {
    type: DELETE_ADMIN_TAGLINE_ERROR,
  };
};

export const deleteAdminTagLine = (id, cb) => async dispatch => {
  try {
    dispatch(deleteAdminTagLineStarted());
    const res = await axios.delete(`/api/tagline/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: DELETE_ADMIN_TAGLINE,
      payload: res.data?.data,
    });
    cb();
  } catch (e) {
    dispatch(deleteAdminTagLineError());
  }
};

// tagline

const getTagHeadTagLineStarted = () => {
  return {
    type: GET_TAGHEAD_TAGLINE_STARTED,
  };
};

const getTagHeadTagLineError = () => {
  return {
    type: GET_TAGHEAD_TAGLINE_ERROR,
  };
};

export const getTagHeadTagLine = () => async dispatch => {
  try {
    dispatch(getTagHeadTagLineStarted());
    const res = await axios.get(`/api/taghead`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_TAGHEAD_TAGLINE,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getTagHeadTagLineError());
  }
};
