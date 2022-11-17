import axios from '../../../utils/axios';
import {
  UPLOAD_IMAGE_STARTED,
  UPLOAD_IMAGE_ERROR,
  UPLOAD_IMAGE,
  CLEAR_UPLOAD,
  REMOVE_IMAGE,
  UPLOAD_IMAGE_OFFPLAN,
  UPLOAD_IMAGE_OFFPLAN_ERROR,
  UPLOAD_IMAGE_OFFPLAN_STARTED,
  CLEAR_OFFPLAN_UPLOAD,
  REMOVE_IMAGE_OFFPLAN,
} from '../../constants';

const uploadImageStarted = () => {
  return {
    type: UPLOAD_IMAGE_STARTED,
  };
};

const uploadImageError = () => {
  return {
    type: UPLOAD_IMAGE_ERROR,
  };
};
export const clearUpload = () => {
  return { type: CLEAR_UPLOAD };
};

export const uploadAdminPropertyImage = (payload, cb, i) => async dispatch => {
  try {
    dispatch(uploadImageStarted());
    const res = await axios.post('/image/upload-single', payload);
    cb(res.data?.data);
    dispatch({
      type: UPLOAD_IMAGE,
      payload: res.data?.data,
      index: i,
    });
  } catch (e) {
    dispatch(uploadImageError());
  }
};

export const removeImage = img => {
  return {
    type: REMOVE_IMAGE,
    payload: img,
  };
};

const uploadOffplanImageStarted = () => {
  return {
    type: UPLOAD_IMAGE_OFFPLAN_STARTED,
  };
};

const uploadOffplanImageError = () => {
  return {
    type: UPLOAD_IMAGE_OFFPLAN_ERROR,
  };
};
export const clearOffplanUpload = () => {
  return { type: CLEAR_OFFPLAN_UPLOAD };
};

export const uploadOffplanAdminImage = (payload, cb, i) => async dispatch => {
  try {
    dispatch(uploadOffplanImageStarted());
    const res = await axios.post('/image/upload-single', payload);
    cb(res.data?.data);
    dispatch({
      type: UPLOAD_IMAGE_OFFPLAN,
      payload: res.data?.data,
      index: i,
    });
  } catch (e) {
    dispatch(uploadOffplanImageError());
  }
};

export const removeOffplanImage = img => {
  return {
    type: REMOVE_IMAGE_OFFPLAN,
    payload: img,
  };
};
