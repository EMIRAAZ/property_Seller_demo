import { initialState } from './initialState';
import {
  GET_ADVERTISE_ADMIN,
  GET_ADVERTISE_ADMIN_ERROR,
  GET_ADVERTISE_ADMIN_STARTED,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADVERTISE_ADMIN:
      return {
        ...state,
        advertise: {
          ...state.advertise,
          error: false,
          loading: false,
          list: action.payload.rows,
          count: action.payload.count,
        },
      };
    case GET_ADVERTISE_ADMIN_STARTED:
      return {
        ...state,
        advertise: {
          ...state.advertise,
          error: false,
          loading: true,
        },
      };
    case GET_ADVERTISE_ADMIN_ERROR:
      return {
        ...state,
        advertise: {
          ...state.advertise,
          error: true,
          loading: false,
        },
      };
    default:
      return state;
  }
};

export default reducer;
