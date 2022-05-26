import axios from '../../../utils/axios';
import {
  GET_BUY_PROPERTY,
  GET_BUY_PROPERTY_ERROR,
  GET_BUY_PROPERTY_STARTED,
} from '../../constants';

/// buy property ///

const getBuyPropertyStarted = () => {
  return {
    type: GET_BUY_PROPERTY_STARTED,
  };
};

const getBuyPropertyError = () => {
  return {
    type: GET_BUY_PROPERTY_ERROR,
  };
};

export const getBuyProperty =
  (params = '') =>
  async dispatch => {
    try {
      dispatch(getBuyPropertyStarted());
      const res = await axios.get(`/api/property${params}`);
      dispatch({
        type: GET_BUY_PROPERTY,
        payload: res.data?.data,
      });
    } catch (e) {
      dispatch(getBuyPropertyError());
    }
  };

/// buy property ///
