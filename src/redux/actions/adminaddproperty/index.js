import axios from '../../../utils/axios';
import {
  ADD_ADMIN_PROPERTY,
  ADD_ADMIN_PROPERTY_ERROR,
  ADD_ADMIN_PROPERTY_STARTED,
  ADMIN_PROPERTY_INPUT_CHANGE,
  GET_AGENT_PROPERTY,
  GET_AGENT_PROPERTY_ERROR,
  GET_AGENT_PROPERTY_STARTED,
  GET_AMENITY_PROPERTY,
  GET_AMENITY_PROPERTY_ERROR,
  GET_AMENITY_PROPERTY_STARTED,
  EDIT_ADMIN_PROPERTY,
  EDIT_ADMIN_PROPERTY_ERROR,
  EDIT_ADMIN_PROPERTY_STARTED,
  GET_ADMIN_PROPERTY_BY_ID,
  GET_ADMIN_PROPERTY_BY_ID_ERROR,
  GET_ADMIN_PROPERTY_BY_ID_STARTED,
  CLEAR_ADD_PROPERTY,
  GET_NEIGHBORHOOD_PROPERTY,
  GET_NEIGHBORHOOD_PROPERTY_STARTED,
  GET_NEIGHBORHOOD_PROPERTY_ERROR,
  GET_TAGLINE_PROPERTY,
  GET_TAGLINE_PROPERTY_STARTED,
  GET_TAGLINE_PROPERTY_ERROR,
  ADD_IMAGES_PROPERTY,
  ADD_IMAGES_PROPERTY_STARTED,
  ADD_IMAGES_PROPERTY_ERROR,
  DELETE_IMAGES_PROPERTY,
  DELETE_IMAGES_PROPERTY_STARTED,
  DELETE_IMAGES_PROPERTY_ERROR,
} from '../../constants';

const addPropertyImagesStarted = payload => {
  return {
    type: ADD_IMAGES_PROPERTY_STARTED,
  };
};
const addPropertyImagesError = payload => {
  return {
    type: ADD_IMAGES_PROPERTY_ERROR,
  };
};

export const addPropertyImages = payload => async dispatch => {
  try {
    dispatch(addPropertyImagesStarted());
    const res = await axios.post(`/image/upload-single`, payload);
    dispatch({
      type: ADD_IMAGES_PROPERTY,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(addPropertyImagesError());
  }
};

const deletePropertyImagesStarted = payload => {
  return {
    type: DELETE_IMAGES_PROPERTY_STARTED,
  };
};
const deletePropertyImagesError = payload => {
  return {
    type: DELETE_IMAGES_PROPERTY_ERROR,
  };
};

export const deletePropertyImages = id => async dispatch => {
  const newId = id;
  try {
    dispatch(deletePropertyImagesStarted());
    await axios.delete(
      `/image/delete-single-image/${newId.split('/uploads/').pop()}`
    );
    dispatch({
      type: DELETE_IMAGES_PROPERTY,
      payload: id,
    });
  } catch (e) {
    if (e.response?.data?.message === 'No file exist') {
      dispatch({
        type: DELETE_IMAGES_PROPERTY,
        payload: id,
      });
    } else dispatch(deletePropertyImagesError());
  }
};

export const changeAdminPropertyInput = payload => {
  return {
    type: ADMIN_PROPERTY_INPUT_CHANGE,
    payload: payload,
  };
};

const addAdminPropertyStarted = () => {
  return {
    type: ADD_ADMIN_PROPERTY_STARTED,
  };
};

const addAdminPropertyError = () => {
  return {
    type: ADD_ADMIN_PROPERTY_ERROR,
  };
};

export const addAdminProperty = (property, cb) => async dispatch => {
  try {
    dispatch(addAdminPropertyStarted());
    const res = await axios.post(`/api/property`, property, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    cb();
    dispatch({
      type: ADD_ADMIN_PROPERTY,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(addAdminPropertyError());
  }
};

const getAgentPropertyStarted = () => {
  return {
    type: GET_AGENT_PROPERTY_STARTED,
  };
};

const getAgentPropertyError = () => {
  return {
    type: GET_AGENT_PROPERTY_ERROR,
  };
};

export const getAgentProperty = () => async dispatch => {
  try {
    dispatch(getAgentPropertyStarted());
    const res = await axios.get(`/api/agent`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_AGENT_PROPERTY,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getAgentPropertyError());
  }
};

const getAmenityPropertyStarted = () => {
  return {
    type: GET_AMENITY_PROPERTY_STARTED,
  };
};

const getAmenityPropertyError = () => {
  return {
    type: GET_AMENITY_PROPERTY_ERROR,
  };
};

export const getAmenityProperty = () => async dispatch => {
  try {
    dispatch(getAmenityPropertyStarted());
    const res = await axios.get(`/api/amenity`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_AMENITY_PROPERTY,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getAmenityPropertyError());
  }
};

// edit property

const editAdminPropertyStarted = () => {
  return {
    type: EDIT_ADMIN_PROPERTY_STARTED,
  };
};

const editAdminPropertyError = () => {
  return {
    type: EDIT_ADMIN_PROPERTY_ERROR,
  };
};

export const editAdminProperty = (id, property, cb) => async dispatch => {
  try {
    dispatch(editAdminPropertyStarted());
    const res = await axios.patch(`/api/property/${id}`, property, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    cb();
    dispatch({
      type: EDIT_ADMIN_PROPERTY,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(editAdminPropertyError());
  }
};

// edit property

// get property by Id

const getAdminPropertyByIdStarted = () => {
  return {
    type: GET_ADMIN_PROPERTY_BY_ID_STARTED,
  };
};

const getAdminPropertyByIdError = () => {
  return {
    type: GET_ADMIN_PROPERTY_BY_ID_ERROR,
  };
};

export const getAdminPropertyById = id => async dispatch => {
  try {
    dispatch(getAdminPropertyByIdStarted());
    const res = await axios.get(`/api/property/${id}`);
    dispatch({
      type: GET_ADMIN_PROPERTY_BY_ID,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getAdminPropertyByIdError());
  }
};

// get property by Id

// clear add property

export const clearAddProperty = () => {
  return {
    type: CLEAR_ADD_PROPERTY,
  };
};

// neighborhood

const getNeighborhoodPropertyStarted = () => {
  return {
    type: GET_NEIGHBORHOOD_PROPERTY_STARTED,
  };
};

const getNeighborhoodPropertyError = () => {
  return {
    type: GET_NEIGHBORHOOD_PROPERTY_ERROR,
  };
};

export const getNeighborhoodProperty = () => async dispatch => {
  try {
    dispatch(getNeighborhoodPropertyStarted());
    const res = await axios.get(`/api/famousneighborhood`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_NEIGHBORHOOD_PROPERTY,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getNeighborhoodPropertyError());
  }
};

// tagline

const getTaglinePropertyStarted = () => {
  return {
    type: GET_TAGLINE_PROPERTY_STARTED,
  };
};

const getTaglinePropertyError = () => {
  return {
    type: GET_TAGLINE_PROPERTY_ERROR,
  };
};

export const getTaglineProperty = () => async dispatch => {
  try {
    dispatch(getTaglinePropertyStarted());
    const res = await axios.get(`/api/tagline`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_TAGLINE_PROPERTY,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getTaglinePropertyError());
  }
};
