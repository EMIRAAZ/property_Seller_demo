import axios from '../../../utils/axios';
import {
  GET_NEIGHBORHOOD_WEB,
  GET_NEIGHBORHOOD_WEB_ERROR,
  GET_NEIGHBORHOOD_WEB_STARTED,
} from '../../constants';

const getNeighborhoodWebStarted = () => {
  return {
    type: GET_NEIGHBORHOOD_WEB_STARTED,
  };
};

const getNeighborhoodWebError = () => {
  return {
    type: GET_NEIGHBORHOOD_WEB_ERROR,
  };
};

export const getNeighborhoodWeb = () => async dispatch => {
  try {
    dispatch(getNeighborhoodWebStarted());
    const res = await axios.get(`/api/famousneighborhood`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_NEIGHBORHOOD_WEB,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getNeighborhoodWebError());
  }
};
