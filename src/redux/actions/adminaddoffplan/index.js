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
} from '../../constants';

export const changeAdminOffplanInput = payload => {
  return {
    type: ADMIN_OFFPLAN_INPUT_CHANGE,
    payload: payload,
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
