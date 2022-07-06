import axios from '../../../utils/axios';
import {
  GET_LUXURY_VILLA,
  GET_LUXURY_VILLA_STARTED,
  GET_LUXURY_VILLA_ERROR,
} from '../../constants';

const getLuxuryVillaStarted = () => {
  return {
    type: GET_LUXURY_VILLA_STARTED,
  };
};

const getLuxuryError = () => {
  return {
    type: GET_LUXURY_VILLA_ERROR,
  };
};

export const getLuxuryVillaWeb = () => async dispatch => {
  try {
    dispatch(getLuxuryVillaStarted());
    const res = await axios.get(`/api/property?propertyType=villa`);
    dispatch({
      type: GET_LUXURY_VILLA,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getLuxuryError());
  }
};
