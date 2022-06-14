import { initialState } from './initialState';
import {
  GET_ADMIN_AGENCY,
  GET_ADMIN_AGENCY_ERROR,
  GET_ADMIN_AGENCY_STARTED,
  DELETE_ADMIN_AGENCY,
  DELETE_ADMIN_AGENCY_ERROR,
  DELETE_ADMIN_AGENCY_STARTED,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADMIN_AGENCY:
      return {
        ...state,
        adminAgency: {
          ...state.adminAgency,
          error: false,
          loading: false,
          agency: action.payload.rows,
          count: action.payload.count,
        },
      };
    case GET_ADMIN_AGENCY_STARTED:
      return {
        ...state,
        adminAgency: {
          ...state.adminAgency,
          error: false,
          loading: true,
        },
      };
    case GET_ADMIN_AGENCY_ERROR:
      return {
        ...state,
        adminAgency: {
          ...state.adminAgency,
          error: true,
          loading: false,
        },
      };
    case DELETE_ADMIN_AGENCY:
      return {
        ...state,
      };
    case DELETE_ADMIN_AGENCY_STARTED:
      return {
        ...state,
      };
    case DELETE_ADMIN_AGENCY_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
