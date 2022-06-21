import axios from '../../../utils/axios';
import {
  UPLOAD_IMAGE_STARTED,
  UPLOAD_IMAGE_ERROR,
  UPLOAD_IMAGE,
  CLEAR_UPLOAD,
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
