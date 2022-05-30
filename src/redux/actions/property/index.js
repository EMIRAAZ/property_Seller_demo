import axios from '../../../utils/axios';
import {
  GET_PROPERTY_BY_ID,
  GET_PROPERTY_BY_ID_STARTED,
  GET_PROPERTY_BY_ID_ERROR,
} from '../../constants';

const getPropertyStarted = () => {
  return {
    type: GET_PROPERTY_BY_ID_STARTED,
  };
};

const getPropertyError = () => {
  return {
    type: GET_PROPERTY_BY_ID_ERROR,
  };
};

export const getPropertyByID = id => async dispatch => {
  try {
    dispatch(getPropertyStarted());
    const res = await axios.get(`/api/property/${id}`);
    dispatch({
      type: GET_PROPERTY_BY_ID,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getPropertyError());
  }
};
