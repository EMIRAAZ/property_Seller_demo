import axios from '../../../utils/axios';

import {
  ADMIN_LOGGED_IN,
  ADMIN_LOGIN_ERROR,
  ADMIN_LOGIN_STARTED,
} from '../../constants';

const loginStarted = () => {
  return {
    type: ADMIN_LOGIN_STARTED,
  };
};

const loginError = () => {
  return {
    type: ADMIN_LOGIN_ERROR,
  };
};

export const loginAdmin = (payload, cb) => async dispatch => {
  const { username, password } = payload;
  try {
    dispatch(loginStarted());
    const res = await axios.post('/admin/login-admin', { username, password });
    localStorage.setItem('authToken', res?.headers['auth-token']);
    localStorage.setItem('role', res?.headers?.role);
    dispatch({
      type: ADMIN_LOGGED_IN,
      payload: res.data?.data,
    });
    cb();
  } catch (e) {
    dispatch(loginError());
  }
};
