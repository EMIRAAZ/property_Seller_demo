import { initialState } from './initialState';
import {
  GET_ADMIN_PROPERTY,
  GET_ADMIN_PROPERTY_ERROR,
  GET_ADMIN_PROPERTY_STARTED,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADMIN_PROPERTY:
      return {
        ...state,
        adminProperty: {
          ...state.adminProperty,
          error: false,
          loading: false,
          property: action.payload.rows,
          count: action.payload.count,
        },
      };
    case GET_ADMIN_PROPERTY_STARTED:
      return {
        ...state,
        adminProperty: {
          ...state.adminProperty,
          error: false,
          loading: true,
        },
      };
    case GET_ADMIN_PROPERTY_ERROR:
      return {
        ...state,
        adminProperty: {
          ...state.adminProperty,
          error: true,
          loading: false,
        },
      };
    default:
      return state;
  }
};

export default reducer;
