import { initialState } from './initialState';
import {
  ADMIN_LOGGED_IN,
  ADMIN_LOGIN_ERROR,
  ADMIN_LOGIN_STARTED,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_STARTED:
      return {
        ...state,
        loading: true,
      };
    case ADMIN_LOGGED_IN:
      return {
        ...state,
        loading: false,
      };
    case ADMIN_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
