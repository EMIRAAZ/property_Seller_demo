import axios from '../../../utils/axios';

import {
  AGENCY_LOGGED_IN,
  AGENCY_LOGIN_ERROR,
  AGENCY_LOGIN_STARTED,
} from '../../constants';

const loginStarted = () => {
  return {
    type: AGENCY_LOGIN_STARTED,
  };
};

const loginError = () => {
  return {
    type: AGENCY_LOGIN_ERROR,
  };
};

export const loginAgency = (payload, cb) => async dispatch => {
  const { username, password } = payload;
  try {
    dispatch(loginStarted());
    const res = await axios.post('/api/login-agency', { username, password });
    localStorage.setItem('authToken', res?.headers['auth-token']);
    localStorage.setItem('role', res?.headers?.role);
    localStorage.setItem('agency_id', res?.data?.id);
    dispatch({
      type: AGENCY_LOGGED_IN,
      payload: res.data?.data,
    });
    cb();
  } catch (e) {
    dispatch(loginError());
  }
};
