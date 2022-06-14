import axios from '../../../utils/axios';
import {
  GET_AMENITY_ADMIN,
  GET_AMENITY_ADMIN_ERROR,
  GET_AMENITY_ADMIN_STARTED,
  ADMIN_AMENITY_INPUT_CHANGE,
  ADD_ADMIN_AMENITY,
  ADD_ADMIN_AMENITY_STARTED,
  ADD_ADMIN_AMENITY_ERROR,
  EDIT_ADMIN_AMENITY,
  EDIT_ADMIN_AMENITY_STARTED,
  EDIT_ADMIN_AMENITY_ERROR,
  GET_AMENITY_ADMIN_BY_ID,
  GET_AMENITY_ADMIN_ERROR_BY_ID,
  GET_AMENITY_ADMIN_STARTED_BY_ID,
} from '../../constants';

export const changeAdminAmenityInput = payload => {
  return {
    type: ADMIN_AMENITY_INPUT_CHANGE,
    payload: payload,
  };
};

const getAmenityAdminStarted = () => {
  return {
    type: GET_AMENITY_ADMIN_STARTED,
  };
};

const getAmenityAdminError = () => {
  return {
    type: GET_AMENITY_ADMIN_ERROR,
  };
};

export const getAmenityAdmin = () => async dispatch => {
  try {
    dispatch(getAmenityAdminStarted());
    const res = await axios.get(`/api/amenity`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_AMENITY_ADMIN,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getAmenityAdminError());
  }
};

// add amenity

const addAdminAmenityStarted = () => {
  return {
    type: ADD_ADMIN_AMENITY_STARTED,
  };
};

const addAdminAmenityError = () => {
  return {
    type: ADD_ADMIN_AMENITY_ERROR,
  };
};

export const addAdminAmenity = (amenity, cb) => async dispatch => {
  try {
    dispatch(addAdminAmenityStarted());
    const res = await axios.post(`/api/amenity`, amenity, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    cb();
    dispatch({
      type: ADD_ADMIN_AMENITY,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(addAdminAmenityError());
  }
};

// edit amenity

const editAdminAmenityStarted = () => {
  return {
    type: EDIT_ADMIN_AMENITY_STARTED,
  };
};

const editAdminAmenityError = () => {
  return {
    type: EDIT_ADMIN_AMENITY_ERROR,
  };
};

export const editAdminAmenity = (id, amenity, cb) => async dispatch => {
  try {
    dispatch(editAdminAmenityStarted());
    const res = await axios.patch(`/api/amenity/${id}`, amenity, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    cb();
    dispatch({
      type: EDIT_ADMIN_AMENITY,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(editAdminAmenityError());
  }
};

// getById amenity

const getByIdAdminAmenityStarted = () => {
  return {
    type: GET_AMENITY_ADMIN_STARTED_BY_ID,
  };
};

const getByIdAdminAmenityError = () => {
  return {
    type: GET_AMENITY_ADMIN_ERROR_BY_ID,
  };
};

export const getByIdAdminAmenity = id => async dispatch => {
  try {
    dispatch(getByIdAdminAmenityStarted());
    const res = await axios.get(`/api/amenity/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_AMENITY_ADMIN_BY_ID,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getByIdAdminAmenityError());
  }
};
