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
  CLEAR_ADD_AMENITY,
  GET_AMENITY_ADMIN_STARTED_BY_ID,
  DELETE_ADMIN_AMENITY,
  DELETE_ADMIN_AMENITY_STARTED,
  DELETE_ADMIN_AMENITY_ERROR,
  DELETE_LOGO_AMENITY_STARTED,
  DELETE_LOGO_AMENITY,
  DELETE_LOGO_AMENITY_ERROR,
  ADD_LOGO_AMENITY_STARTED,
  ADD_LOGO_AMENITY,
  ADD_LOGO_AMENITY_ERROR,
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

export const clearAddAmenity = () => {
  return {
    type: CLEAR_ADD_AMENITY,
  };
};

// delete amenity

const deleteAdminAmenityStarted = () => {
  return {
    type: DELETE_ADMIN_AMENITY_STARTED,
  };
};

const deleteAdminAmenityError = () => {
  return {
    type: DELETE_ADMIN_AMENITY_ERROR,
  };
};

export const deleteAdminAmenity = (id, cb) => async dispatch => {
  try {
    dispatch(deleteAdminAmenityStarted());
    const res = await axios.delete(`/api/amenity/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: DELETE_ADMIN_AMENITY,
      payload: res.data?.data,
    });
    cb();
  } catch (e) {
    dispatch(deleteAdminAmenityError());
  }
};

//IMAGE

const addAmenityLogoStarted = payload => {
  return {
    type: ADD_LOGO_AMENITY_STARTED,
  };
};
const addAmenityLogoError = payload => {
  return {
    type: ADD_LOGO_AMENITY_ERROR,
  };
};

export const addAmenityLogo = payload => async dispatch => {
  try {
    dispatch(addAmenityLogoStarted());
    const res = await axios.post(`/image/upload-single`, payload);
    dispatch({
      type: ADD_LOGO_AMENITY,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(addAmenityLogoError());
  }
};
const deleteAmenityLogoStarted = payload => {
  return {
    type: DELETE_LOGO_AMENITY_STARTED,
  };
};
const deleteAmenityLogoError = payload => {
  return {
    type: DELETE_LOGO_AMENITY_ERROR,
  };
};

export const deleteAmenityLogo = id => async dispatch => {
  const newId = id;
  try {
    dispatch(deleteAmenityLogoStarted());
    await axios.delete(
      `/image/delete-single-image/${newId.split('/uploads/').pop()}`
    );
    dispatch({
      type: DELETE_LOGO_AMENITY,
      payload: id,
    });
  } catch (e) {
    if (e.response?.data?.message === 'No file exist') {
      dispatch({
        type: DELETE_LOGO_AMENITY,
        payload: id,
      });
    } else dispatch(deleteAmenityLogoError());
  }
};
