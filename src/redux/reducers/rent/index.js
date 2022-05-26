import { initialState } from './initialState';
import {
  GET_RENT_PROPERTY,
  GET_RENT_PROPERTY_ERROR,
  GET_RENT_PROPERTY_STARTED,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RENT_PROPERTY:
      return {
        ...state,
        rentProperty: {
          ...state.rentProperty,
          error: false,
          loading: false,
          property: action.payload.rows,
          count: action.payload.count,
        },
      };
    case GET_RENT_PROPERTY_STARTED:
      return {
        ...state,
        rentProperty: {
          ...state.rentProperty,
          error: false,
          loading: true,
        },
      };
    case GET_RENT_PROPERTY_ERROR:
      return {
        ...state,
        rentProperty: {
          ...state.rentProperty,
          error: true,
          loading: false,
        },
      };
    default:
      return state;
  }
};

export default reducer;
