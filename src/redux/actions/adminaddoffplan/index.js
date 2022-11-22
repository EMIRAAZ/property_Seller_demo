import axios from '../../../utils/axios';
import {
  ADD_ADMIN_OFFPLAN,
  ADD_ADMIN_OFFPLAN_ERROR,
  ADD_ADMIN_OFFPLAN_STARTED,
  ADMIN_OFFPLAN_INPUT_CHANGE,
  GET_AMENITY_OFFPLAN,
  GET_AMENITY_OFFPLAN_ERROR,
  GET_AMENITY_OFFPLAN_STARTED,
  EDIT_ADMIN_OFFPLAN,
  EDIT_ADMIN_OFFPLAN_ERROR,
  EDIT_ADMIN_OFFPLAN_STARTED,
  GET_ADMIN_OFFPLAN_BY_ID,
  GET_ADMIN_OFFPLAN_BY_ID_ERROR,
  GET_ADMIN_OFFPLAN_BY_ID_STARTED,
  CLEAR_ADD_OFFPLAN,
  ADMIN_OFFPLAN_MULTIPLE_INPUT_CHANGE,
  DELETE_MULTIPLE_ADMIN_OFFPLAN,
  ADD_NEW_BOX_OFFPLAN,
  GET_AGENT_OFFPLAN,
  GET_AGENT_OFFPLAN_ERROR,
  GET_AGENT_OFFPLAN_STARTED,
  ADD_IMAGES_OFFPLAN,
  ADD_IMAGES_OFFPLAN_STARTED,
  ADD_IMAGES_OFFPLAN_ERROR,
  DELETE_IMAGES_OFFPLAN,
  DELETE_IMAGES_OFFPLAN_STARTED,
  DELETE_IMAGES_OFFPLAN_ERROR,
  DELETE_IMAGES_OFFPLAN_PRICE_AVAIL,
  DELETE_IMAGES_OFFPLAN_PRICE_AVAIL_STARTED,
  DELETE_IMAGES_OFFPLAN_PRICE_AVAIL_ERROR,
  ADD_IMAGE_OFPLN_PRC_AVL,
  ADD_IMAGE_OFPLN_PRC_AVL_STARTED,
  ADD_IMAGE_OFPLN_PRC_AVL_ERROR,
  GET_CITY_OFFPLAN,
  GET_CITY_OFFPLAN_STARTED,
  GET_CITY_OFFPLAN_ERROR,
} from '../../constants';

export const changeAdminOffplanInput = payload => {
  return {
    type: ADMIN_OFFPLAN_INPUT_CHANGE,
    payload: payload,
  };
};

export const addOffplanImagesStarted = payload => {
  return {
    type: ADD_IMAGES_OFFPLAN_STARTED,
  };
};
export const addOffplanImagesError = payload => {
  return {
    type: ADD_IMAGES_OFFPLAN_ERROR,
  };
};

export const addOffplanImages = payload => async dispatch => {
  try {
    dispatch(addOffplanImagesStarted());
    const res = await axios.post(`/image/upload-single`, payload);
    dispatch({
      type: ADD_IMAGES_OFFPLAN,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(addOffplanImagesError());
  }
};

export const addOffplanImgPrcAvlStarted = payload => {
  return {
    type: ADD_IMAGE_OFPLN_PRC_AVL_STARTED,
  };
};
export const addOffplanImgPrcAvlError = payload => {
  return {
    type: ADD_IMAGE_OFPLN_PRC_AVL_ERROR,
  };
};

export const addOffplanImgPrcAvl =
  (formData, key, position) => async dispatch => {
    try {
      dispatch(addOffplanImgPrcAvlStarted());
      const res = await axios.post(`/image/upload-single`, formData);
      dispatch({
        type: ADD_IMAGE_OFPLN_PRC_AVL,
        payload: { img: res.data?.data, key, position },
      });
    } catch (e) {
      dispatch(addOffplanImgPrcAvlError());
    }
  };

export const deleteOffplanImagesStarted = payload => {
  return {
    type: DELETE_IMAGES_OFFPLAN_STARTED,
  };
};
export const deleteOffplanImagesError = payload => {
  return {
    type: DELETE_IMAGES_OFFPLAN_ERROR,
  };
};

export const deleteOffplanImages = id => async dispatch => {
  const newId = id;
  try {
    dispatch(deleteOffplanImagesStarted());
    await axios.delete(
      `/image/delete-single-image/${newId.split('/uploads/').pop()}`
    );
    dispatch({
      type: DELETE_IMAGES_OFFPLAN,
      payload: id,
    });
  } catch (e) {
    if (e.response?.data?.message === 'No file exist') {
      dispatch({
        type: DELETE_IMAGES_OFFPLAN,
        payload: id,
      });
    } else dispatch(deleteOffplanImagesError());
  }
};

export const deleteOffplanImagePriceAvailStarted = payload => {
  return {
    type: DELETE_IMAGES_OFFPLAN_PRICE_AVAIL_STARTED,
  };
};
export const deleteOffplanImagePriceAvailError = payload => {
  return {
    type: DELETE_IMAGES_OFFPLAN_PRICE_AVAIL_ERROR,
  };
};

export const deleteOffplanImagePriceAvail =
  (name, key, position) => async dispatch => {
    const newId = name;
    try {
      dispatch(deleteOffplanImagePriceAvailStarted());
      await axios.delete(
        `/image/delete-single-image/${newId.split('/uploads/').pop()}`
      );
      dispatch({
        type: DELETE_IMAGES_OFFPLAN_PRICE_AVAIL,
        payload: { name, key, position },
      });
    } catch (e) {
      if (e.response?.data?.message === 'No file exist') {
        dispatch({
          type: DELETE_IMAGES_OFFPLAN_PRICE_AVAIL,
          payload: { name, key, position },
        });
      } else dispatch(deleteOffplanImagePriceAvailError());
    }
  };

export const changeAdminOffplanMultipleInput = (mk, k, v, i) => {
  return {
    type: ADMIN_OFFPLAN_MULTIPLE_INPUT_CHANGE,
    mainKey: mk,
    key: k,
    value: v,
    position: i,
  };
};

export const addNewBoxOffplan = (mk, v) => {
  return {
    type: ADD_NEW_BOX_OFFPLAN,
    mainKey: mk,
    value: v,
  };
};

export const deleteAdminOffplanMultipleInput = (mk, i) => {
  return {
    type: DELETE_MULTIPLE_ADMIN_OFFPLAN,
    mainKey: mk,
    position: i,
  };
};

const addAdminOffplanStarted = () => {
  return {
    type: ADD_ADMIN_OFFPLAN_STARTED,
  };
};

const addAdminOffplanError = () => {
  return {
    type: ADD_ADMIN_OFFPLAN_ERROR,
  };
};

export const addAdminOffplan = (offplan, cb) => async dispatch => {
  offplan.price = offplan.price ? offplan.price.split(' ') : [];
  try {
    dispatch(addAdminOffplanStarted());
    const res = await axios.post(`/api/offplan`, offplan, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    cb();
    dispatch({
      type: ADD_ADMIN_OFFPLAN,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(addAdminOffplanError());
  }
};

const getAmenityOffplanStarted = () => {
  return {
    type: GET_AMENITY_OFFPLAN_STARTED,
  };
};

const getAmenityOffplanError = () => {
  return {
    type: GET_AMENITY_OFFPLAN_ERROR,
  };
};

export const getAmenityOffplan = () => async dispatch => {
  try {
    dispatch(getAmenityOffplanStarted());
    const res = await axios.get(`/api/amenity`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_AMENITY_OFFPLAN,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getAmenityOffplanError());
  }
};

// edit offplan

const editAdminOffplanStarted = () => {
  return {
    type: EDIT_ADMIN_OFFPLAN_STARTED,
  };
};

const editAdminOffplanError = () => {
  return {
    type: EDIT_ADMIN_OFFPLAN_ERROR,
  };
};

export const editAdminOffplan = (id, offplan, cb) => async dispatch => {
  offplan.price = offplan.price ? offplan.price.split(' ') : [];
  try {
    dispatch(editAdminOffplanStarted());
    const res = await axios.patch(`/api/offplan/${id}`, offplan, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    cb();
    dispatch({
      type: EDIT_ADMIN_OFFPLAN,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(editAdminOffplanError());
  }
};

// edit offplan

// get offplan by Id

const getAdminOffplanByIdStarted = () => {
  return {
    type: GET_ADMIN_OFFPLAN_BY_ID_STARTED,
  };
};

const getAdminOffplanByIdError = () => {
  return {
    type: GET_ADMIN_OFFPLAN_BY_ID_ERROR,
  };
};

export const getAdminOffplanById = id => async dispatch => {
  try {
    dispatch(getAdminOffplanByIdStarted());
    const res = await axios.get(`/api/offplan/${id}`);
    dispatch({
      type: GET_ADMIN_OFFPLAN_BY_ID,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getAdminOffplanByIdError());
  }
};

// get offplan by Id

// clear add offplan

export const clearAddOffplan = () => {
  return {
    type: CLEAR_ADD_OFFPLAN,
  };
};

const getAgentOffplanStarted = () => {
  return {
    type: GET_AGENT_OFFPLAN_STARTED,
  };
};

const getAgentOffplanError = () => {
  return {
    type: GET_AGENT_OFFPLAN_ERROR,
  };
};

export const getAgentOffplan = () => async dispatch => {
  try {
    dispatch(getAgentOffplanStarted());
    const res = await axios.get(`/api/agent`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_AGENT_OFFPLAN,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getAgentOffplanError());
  }
};

// CITY

const getCityOffplanStarted = () => {
  return {
    type: GET_CITY_OFFPLAN_STARTED,
  };
};

const getCityOffplanError = () => {
  return {
    type: GET_CITY_OFFPLAN_ERROR,
  };
};

export const getCityOffplan = () => async dispatch => {
  try {
    dispatch(getCityOffplanStarted());
    const res = await axios.get(`/api/city`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_CITY_OFFPLAN,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getCityOffplanError());
  }
};

export const getCityByEmirateOffplan = emirate => async dispatch => {
  try {
    dispatch(getCityOffplanStarted());
    const res = await axios.get(`/api/city/emirate?emirate=${emirate}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_CITY_OFFPLAN,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getCityOffplanError());
  }
};
