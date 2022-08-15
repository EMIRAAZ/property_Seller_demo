import { initialState } from './initialState';
import {
  GET_AGENCY_PROPERTY,
  GET_AGENCY_PROPERTY_ERROR,
  GET_AGENCY_PROPERTY_STARTED,
  DELETE_AGENCY_PROPERTY,
  DELETE_AGENCY_PROPERTY_ERROR,
  DELETE_AGENCY_PROPERTY_STARTED,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AGENCY_PROPERTY:
      return {
        ...state,
        agencyProperty: {
          ...state.agencyProperty,
          error: false,
          loading: false,
          property: action.payload.rows,
          count: action.payload.count,
        },
      };
    case GET_AGENCY_PROPERTY_STARTED:
      return {
        ...state,
        agencyProperty: {
          ...state.agencyProperty,
          error: false,
          loading: true,
        },
      };
    case GET_AGENCY_PROPERTY_ERROR:
      return {
        ...state,
        agencyProperty: {
          ...state.agencyProperty,
          error: true,
          loading: false,
        },
      };
    case DELETE_AGENCY_PROPERTY:
      return {
        ...state,
      };
    case DELETE_AGENCY_PROPERTY_STARTED:
      return {
        ...state,
      };
    case DELETE_AGENCY_PROPERTY_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
