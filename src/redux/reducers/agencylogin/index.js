import { initialState } from './initialState';
import {
  AGENCY_LOGGED_IN,
  AGENCY_LOGIN_ERROR,
  AGENCY_LOGIN_STARTED,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AGENCY_LOGIN_STARTED:
      return {
        ...state,
        loading: true,
      };
    case AGENCY_LOGGED_IN:
      return {
        ...state,
        loading: false,
      };
    case AGENCY_LOGIN_ERROR:
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
