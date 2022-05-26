import axios from '../../../utils/axios';
import {
  GET_HOME_PROPERTY,
  GET_HOME_PROPERTY_ERROR,
  GET_HOME_PROPERTY_STARTED,
  HOME_SEARCH_INPUT_CHANGE,
} from '../../constants';

/// home property ///

const getHomePropertyStarted = () => {
  return {
    type: GET_HOME_PROPERTY_STARTED,
  };
};

const getHomePropertyError = () => {
  return {
    type: GET_HOME_PROPERTY_ERROR,
  };
};

export const getHomeProperty = params => async dispatch => {
  try {
    dispatch(getHomePropertyStarted());
    const res = await axios.get(`/api/property${params}`);
    dispatch({
      type: GET_HOME_PROPERTY,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getHomePropertyError());
  }
};

/// home property ///

/// home search ///

export const onHomeSearchInputChange = payload => {
  return {
    type: HOME_SEARCH_INPUT_CHANGE,
    payload: payload,
  };
};

/// home search ///
