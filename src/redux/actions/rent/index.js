import axios from '../../../utils/axios';
import {
  GET_RENT_PROPERTY,
  GET_RENT_PROPERTY_ERROR,
  GET_RENT_PROPERTY_STARTED,
} from '../../constants';

/// buy property ///

const getRentPropertyStarted = () => {
  return {
    type: GET_RENT_PROPERTY_STARTED,
  };
};

const getRentPropertyError = () => {
  return {
    type: GET_RENT_PROPERTY_ERROR,
  };
};

export const getRentProperty =
  (params = '') =>
  async dispatch => {
    try {
      dispatch(getRentPropertyStarted());
      const res = await axios.get(`/api/property${params}`);
      dispatch({
        type: GET_RENT_PROPERTY,
        payload: res.data?.data,
      });
    } catch (e) {
      dispatch(getRentPropertyError());
    }
  };

/// buy property ///
