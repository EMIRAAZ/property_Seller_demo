import axios from '../../../utils/axios';
import {
  GET_NEIGHBORHOOD_ADMIN,
  GET_NEIGHBORHOOD_ADMIN_ERROR,
  GET_NEIGHBORHOOD_ADMIN_STARTED,
  ADMIN_NEIGHBORHOOD_INPUT_CHANGE,
  ADD_ADMIN_NEIGHBORHOOD,
  ADD_ADMIN_NEIGHBORHOOD_STARTED,
  ADD_ADMIN_NEIGHBORHOOD_ERROR,
  EDIT_ADMIN_NEIGHBORHOOD,
  EDIT_ADMIN_NEIGHBORHOOD_STARTED,
  EDIT_ADMIN_NEIGHBORHOOD_ERROR,
  GET_NEIGHBORHOOD_ADMIN_BY_ID,
  GET_NEIGHBORHOOD_ADMIN_ERROR_BY_ID,
  CLEAR_ADD_NEIGHBORHOOD,
  GET_NEIGHBORHOOD_ADMIN_STARTED_BY_ID,
  DELETE_ADMIN_NEIGHBORHOOD,
  DELETE_ADMIN_NEIGHBORHOOD_STARTED,
  DELETE_ADMIN_NEIGHBORHOOD_ERROR,
  ADD_NEIGHBORHOOD_IMAGE,
  ADD_NEIGHBORHOOD_IMAGE_STARTED,
  ADD_NEIGHBORHOOD_IMAGE_ERROR,
  DELETE_NEIGHBORHOOD_IMAGE,
  DELETE_NEIGHBORHOOD_IMAGE_STARTED,
  DELETE_NEIGHBORHOOD_IMAGE_ERROR,
} from '../../constants';

export const changeAdminNeighborhoodInput = payload => {
  return {
    type: ADMIN_NEIGHBORHOOD_INPUT_CHANGE,
    payload: payload,
  };
};

const getNeighborhoodAdminStarted = () => {
  return {
    type: GET_NEIGHBORHOOD_ADMIN_STARTED,
  };
};

const getNeighborhoodAdminError = () => {
  return {
    type: GET_NEIGHBORHOOD_ADMIN_ERROR,
  };
};

export const getNeighborhoodAdmin = () => async dispatch => {
  try {
    dispatch(getNeighborhoodAdminStarted());
    const res = await axios.get(`/api/famousneighborhood`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_NEIGHBORHOOD_ADMIN,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getNeighborhoodAdminError());
  }
};

// add famousneighborhood

const addAdminNeighborhoodStarted = () => {
  return {
    type: ADD_ADMIN_NEIGHBORHOOD_STARTED,
  };
};

const addAdminNeighborhoodError = () => {
  return {
    type: ADD_ADMIN_NEIGHBORHOOD_ERROR,
  };
};

export const addAdminNeighborhood =
  (famousneighborhood, cb) => async dispatch => {
    try {
      dispatch(addAdminNeighborhoodStarted());
      const res = await axios.post(
        `/api/famousneighborhood`,
        famousneighborhood,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken'),
          },
        }
      );
      cb();
      dispatch({
        type: ADD_ADMIN_NEIGHBORHOOD,
        payload: res.data?.data,
      });
    } catch (e) {
      dispatch(addAdminNeighborhoodError());
    }
  };

// edit famousneighborhood

const editAdminNeighborhoodStarted = () => {
  return {
    type: EDIT_ADMIN_NEIGHBORHOOD_STARTED,
  };
};

const editAdminNeighborhoodError = () => {
  return {
    type: EDIT_ADMIN_NEIGHBORHOOD_ERROR,
  };
};

export const editAdminNeighborhood =
  (id, famousneighborhood, cb) => async dispatch => {
    try {
      dispatch(editAdminNeighborhoodStarted());
      const res = await axios.patch(
        `/api/famousneighborhood/${id}`,
        famousneighborhood,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken'),
          },
        }
      );
      cb();
      dispatch({
        type: EDIT_ADMIN_NEIGHBORHOOD,
        payload: res.data?.data,
      });
    } catch (e) {
      dispatch(editAdminNeighborhoodError());
    }
  };

// getById famousneighborhood

const getByIdAdminNeighborhoodStarted = () => {
  return {
    type: GET_NEIGHBORHOOD_ADMIN_STARTED_BY_ID,
  };
};

const getByIdAdminNeighborhoodError = () => {
  return {
    type: GET_NEIGHBORHOOD_ADMIN_ERROR_BY_ID,
  };
};

export const getByIdAdminNeighborhood = id => async dispatch => {
  try {
    dispatch(getByIdAdminNeighborhoodStarted());
    const res = await axios.get(`/api/famousneighborhood/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_NEIGHBORHOOD_ADMIN_BY_ID,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getByIdAdminNeighborhoodError());
  }
};

export const clearAddNeighborhood = () => {
  return {
    type: CLEAR_ADD_NEIGHBORHOOD,
  };
};

// delete famousneighborhood

const deleteAdminNeighborhoodStarted = () => {
  return {
    type: DELETE_ADMIN_NEIGHBORHOOD_STARTED,
  };
};

const deleteAdminNeighborhoodError = () => {
  return {
    type: DELETE_ADMIN_NEIGHBORHOOD_ERROR,
  };
};

export const deleteAdminNeighborhood = (id, cb) => async dispatch => {
  try {
    dispatch(deleteAdminNeighborhoodStarted());
    const res = await axios.delete(`/api/famousneighborhood/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: DELETE_ADMIN_NEIGHBORHOOD,
      payload: res.data?.data,
    });
    cb();
  } catch (e) {
    dispatch(deleteAdminNeighborhoodError());
  }
};

//IMAGE

const addNeighImageStarted = payload => {
  return {
    type: ADD_NEIGHBORHOOD_IMAGE_STARTED,
  };
};
const addNeighImageError = payload => {
  return {
    type: ADD_NEIGHBORHOOD_IMAGE_ERROR,
  };
};

export const addNeighImage = payload => async dispatch => {
  try {
    dispatch(addNeighImageStarted());
    const res = await axios.post(`/image/upload-single`, payload);
    dispatch({
      type: ADD_NEIGHBORHOOD_IMAGE,
      payload: res.data?.data,
    });
  } catch (e) {
    console.log(e);
    dispatch(addNeighImageError());
  }
};
const deleteNeighImageStarted = payload => {
  return {
    type: DELETE_NEIGHBORHOOD_IMAGE_STARTED,
  };
};
const deleteNeighImageError = payload => {
  return {
    type: DELETE_NEIGHBORHOOD_IMAGE_ERROR,
  };
};

export const deleteNeighImage = id => async dispatch => {
  const newId = id;
  try {
    dispatch(deleteNeighImageStarted());
    await axios.delete(
      `/image/delete-single-image/${newId.split('/uploads/').pop()}`
    );
    dispatch({
      type: DELETE_NEIGHBORHOOD_IMAGE,
      payload: id,
    });
  } catch (e) {
    if (e.response?.data?.message === 'No file exist') {
      dispatch({
        type: DELETE_NEIGHBORHOOD_IMAGE,
        payload: id,
      });
    } else dispatch(deleteNeighImageError());
  }
};
