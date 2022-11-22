import axios from '../../../utils/axios';
import {
  GET_BLOG_ADMIN,
  GET_BLOG_ADMIN_ERROR,
  GET_BLOG_ADMIN_STARTED,
  ADMIN_BLOG_INPUT_CHANGE,
  ADD_ADMIN_BLOG,
  ADD_ADMIN_BLOG_STARTED,
  ADD_ADMIN_BLOG_ERROR,
  EDIT_ADMIN_BLOG,
  EDIT_ADMIN_BLOG_STARTED,
  EDIT_ADMIN_BLOG_ERROR,
  GET_BLOG_ADMIN_BY_ID,
  GET_BLOG_ADMIN_ERROR_BY_ID,
  CLEAR_ADD_BLOG,
  GET_BLOG_ADMIN_STARTED_BY_ID,
  DELETE_ADMIN_BLOG,
  DELETE_ADMIN_BLOG_STARTED,
  DELETE_ADMIN_BLOG_ERROR,
  ADD_BLOG_IMAGE_STARTED,
  ADD_BLOG_IMAGE,
  ADD_BLOG_IMAGE_ERROR,
  DELETE_BLOG_IMAGE_STARTED,
  DELETE_BLOG_IMAGE,
  DELETE_BLOG_IMAGE_ERROR,
} from '../../constants';

export const changeAdminBlogInput = payload => {
  return {
    type: ADMIN_BLOG_INPUT_CHANGE,
    payload: payload,
  };
};

const getBlogAdminStarted = () => {
  return {
    type: GET_BLOG_ADMIN_STARTED,
  };
};

const getBlogAdminError = () => {
  return {
    type: GET_BLOG_ADMIN_ERROR,
  };
};

export const getBlogAdmin = () => async dispatch => {
  try {
    dispatch(getBlogAdminStarted());
    const res = await axios.get(`/api/blog`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_BLOG_ADMIN,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getBlogAdminError());
  }
};

// add blog

const addAdminBlogStarted = () => {
  return {
    type: ADD_ADMIN_BLOG_STARTED,
  };
};

const addAdminBlogError = () => {
  return {
    type: ADD_ADMIN_BLOG_ERROR,
  };
};

export const addAdminBlog = (blog, cb) => async dispatch => {
  try {
    dispatch(addAdminBlogStarted());
    const res = await axios.post(`/api/blog`, blog, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    cb();
    dispatch({
      type: ADD_ADMIN_BLOG,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(addAdminBlogError());
  }
};

// edit blog

const editAdminBlogStarted = () => {
  return {
    type: EDIT_ADMIN_BLOG_STARTED,
  };
};

const editAdminBlogError = () => {
  return {
    type: EDIT_ADMIN_BLOG_ERROR,
  };
};

export const editAdminBlog = (id, blog, cb) => async dispatch => {
  try {
    dispatch(editAdminBlogStarted());
    const res = await axios.patch(`/api/blog/${id}`, blog, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    cb();
    dispatch({
      type: EDIT_ADMIN_BLOG,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(editAdminBlogError());
  }
};

// getById blog

const getByIdAdminBlogStarted = () => {
  return {
    type: GET_BLOG_ADMIN_STARTED_BY_ID,
  };
};

const getByIdAdminBlogError = () => {
  return {
    type: GET_BLOG_ADMIN_ERROR_BY_ID,
  };
};

export const getByIdAdminBlog = id => async dispatch => {
  try {
    dispatch(getByIdAdminBlogStarted());
    const res = await axios.get(`/api/blog/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_BLOG_ADMIN_BY_ID,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getByIdAdminBlogError());
  }
};

export const clearAddBlog = () => {
  return {
    type: CLEAR_ADD_BLOG,
  };
};

// delete blog

const deleteAdminBlogStarted = () => {
  return {
    type: DELETE_ADMIN_BLOG_STARTED,
  };
};

const deleteAdminBlogError = () => {
  return {
    type: DELETE_ADMIN_BLOG_ERROR,
  };
};

export const deleteAdminBlog = (id, cb) => async dispatch => {
  try {
    dispatch(deleteAdminBlogStarted());
    const res = await axios.delete(`/api/blog/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: DELETE_ADMIN_BLOG,
      payload: res.data?.data,
    });
    cb();
  } catch (e) {
    dispatch(deleteAdminBlogError());
  }
};

//IMAGE

const addBlogImageStarted = payload => {
  return {
    type: ADD_BLOG_IMAGE_STARTED,
  };
};
const addBlogImageError = payload => {
  return {
    type: ADD_BLOG_IMAGE_ERROR,
  };
};

export const addBlogImage = payload => async dispatch => {
  try {
    dispatch(addBlogImageStarted());
    const res = await axios.post(`/image/upload-single`, payload);
    dispatch({
      type: ADD_BLOG_IMAGE,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(addBlogImageError());
  }
};
const deleteBlogImageStarted = payload => {
  return {
    type: DELETE_BLOG_IMAGE_STARTED,
  };
};
const deleteBlogImageError = payload => {
  return {
    type: DELETE_BLOG_IMAGE_ERROR,
  };
};

export const deleteBlogImage = id => async dispatch => {
  const newId = id;
  try {
    dispatch(deleteBlogImageStarted());
    await axios.delete(
      `/image/delete-single-image/${newId.split('/uploads/').pop()}`
    );
    dispatch({
      type: DELETE_BLOG_IMAGE,
      payload: id,
    });
  } catch (e) {
    if (e.response?.data?.message === 'No file exist') {
      dispatch({
        type: DELETE_BLOG_IMAGE,
        payload: id,
      });
    } else dispatch(deleteBlogImageError());
  }
};
