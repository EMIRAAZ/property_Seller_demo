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
