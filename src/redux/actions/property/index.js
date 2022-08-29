import axios from '../../../utils/axios';
import {
  GET_PROPERTY_BY_ID,
  GET_PROPERTY_BY_ID_STARTED,
  GET_PROPERTY_BY_ID_ERROR,
  GET_SIMILAR_PROPERTY_ERROR,
  GET_SIMILAR_PROPERTY_STARTED,
  GET_SIMILAR_PROPERTY,
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

const getSimilarPropertyStarted = () => {
  return {
    type: GET_SIMILAR_PROPERTY_STARTED,
  };
};

const getSimilarPropertyError = () => {
  return {
    type: GET_SIMILAR_PROPERTY_ERROR,
  };
};

export const getSimilarProperty = city => async dispatch => {
  try {
    dispatch(getSimilarPropertyStarted());
    const res = await axios.get(`/api/property?city=${city}&limit=3`);
    dispatch({
      type: GET_SIMILAR_PROPERTY,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getSimilarPropertyError());
  }
};
