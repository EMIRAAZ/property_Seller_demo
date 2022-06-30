import axios from '../../../utils/axios';
import {
  GET_NEWS_ADMIN,
  GET_NEWS_ADMIN_ERROR,
  GET_NEWS_ADMIN_STARTED,
  ADMIN_NEWS_INPUT_CHANGE,
  ADD_ADMIN_NEWS,
  ADD_ADMIN_NEWS_STARTED,
  ADD_ADMIN_NEWS_ERROR,
  EDIT_ADMIN_NEWS,
  EDIT_ADMIN_NEWS_STARTED,
  EDIT_ADMIN_NEWS_ERROR,
  GET_NEWS_ADMIN_BY_ID,
  GET_NEWS_ADMIN_ERROR_BY_ID,
  CLEAR_ADD_NEWS,
  GET_NEWS_ADMIN_STARTED_BY_ID,
  DELETE_ADMIN_NEWS,
  DELETE_ADMIN_NEWS_STARTED,
  DELETE_ADMIN_NEWS_ERROR,
  GET_TOPICS_NEWS,
  GET_TOPICS_NEWS_STARTED,
  GET_TOPICS_NEWS_ERROR,
} from '../../constants';

export const changeAdminNewsInput = payload => {
  return {
    type: ADMIN_NEWS_INPUT_CHANGE,
    payload: payload,
  };
};

const getNewsAdminStarted = () => {
  return {
    type: GET_NEWS_ADMIN_STARTED,
  };
};

const getNewsAdminError = () => {
  return {
    type: GET_NEWS_ADMIN_ERROR,
  };
};

export const getNewsAdmin = () => async dispatch => {
  try {
    dispatch(getNewsAdminStarted());
    const res = await axios.get(`/api/news`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_NEWS_ADMIN,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getNewsAdminError());
  }
};

// add news

const addAdminNewsStarted = () => {
  return {
    type: ADD_ADMIN_NEWS_STARTED,
  };
};

const addAdminNewsError = () => {
  return {
    type: ADD_ADMIN_NEWS_ERROR,
  };
};

export const addAdminNews = (news, cb) => async dispatch => {
  try {
    dispatch(addAdminNewsStarted());
    const res = await axios.post(`/api/news`, news, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    cb();
    dispatch({
      type: ADD_ADMIN_NEWS,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(addAdminNewsError());
  }
};

// edit news

const editAdminNewsStarted = () => {
  return {
    type: EDIT_ADMIN_NEWS_STARTED,
  };
};

const editAdminNewsError = () => {
  return {
    type: EDIT_ADMIN_NEWS_ERROR,
  };
};

export const editAdminNews = (id, news, cb) => async dispatch => {
  try {
    dispatch(editAdminNewsStarted());
    const res = await axios.patch(`/api/news/${id}`, news, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    cb();
    dispatch({
      type: EDIT_ADMIN_NEWS,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(editAdminNewsError());
  }
};

// getById news

const getByIdAdminNewsStarted = () => {
  return {
    type: GET_NEWS_ADMIN_STARTED_BY_ID,
  };
};

const getByIdAdminNewsError = () => {
  return {
    type: GET_NEWS_ADMIN_ERROR_BY_ID,
  };
};

export const getByIdAdminNews = id => async dispatch => {
  try {
    dispatch(getByIdAdminNewsStarted());
    const res = await axios.get(`/api/news/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_NEWS_ADMIN_BY_ID,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getByIdAdminNewsError());
  }
};

export const clearAddNews = () => {
  return {
    type: CLEAR_ADD_NEWS,
  };
};

// delete news

const deleteAdminNewsStarted = () => {
  return {
    type: DELETE_ADMIN_NEWS_STARTED,
  };
};

const deleteAdminNewsError = () => {
  return {
    type: DELETE_ADMIN_NEWS_ERROR,
  };
};

export const deleteAdminNews = (id, cb) => async dispatch => {
  try {
    dispatch(deleteAdminNewsStarted());
    const res = await axios.delete(`/api/news/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: DELETE_ADMIN_NEWS,
      payload: res.data?.data,
    });
    cb();
  } catch (e) {
    dispatch(deleteAdminNewsError());
  }
};

// news

const getTopicsNewsStarted = () => {
  return {
    type: GET_TOPICS_NEWS_STARTED,
  };
};

const getTopicsNewsError = () => {
  return {
    type: GET_TOPICS_NEWS_ERROR,
  };
};

export const getTopicsNews = () => async dispatch => {
  try {
    dispatch(getTopicsNewsStarted());
    const res = await axios.get(`/api/newstopics`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_TOPICS_NEWS,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getTopicsNewsError());
  }
};
