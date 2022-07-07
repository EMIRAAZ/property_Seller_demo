import { initialState } from './initialState';
import {
  GET_LUXURY_VILLA,
  GET_LUXURY_VILLA_STARTED,
  GET_LUXURY_VILLA_ERROR,
  GET_LUXURY_APPARTMENT,
  GET_LUXURY_APPARTMENT_STARTED,
  GET_LUXURY_APPARTMENT_ERROR,
  GET_LUXURY_TOWNHOUSE_STARTED,
  GET_LUXURY_TOWNHOUSE_ERROR,
  GET_LUXURY_TOWNHOUSE,
  GET_LUXURY_PENTHOUSE_STARTED,
  GET_LUXURY_PENTHOUSE_ERROR,
  GET_LUXURY_PENTHOUSE,
  GET_LUXURY_WITH_PROPERTYTYPE_STARTED,
  GET_LUXURY_WITH_PROPERTYTYPE,
  GET_LUXURY_WITH_PROPERTYTYPE_ERROR,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LUXURY_VILLA:
      return {
        ...state,
        villa: {
          ...state.villa,
          loading: false,
          error: false,
          data: action.payload.rows,
        },
      };
    case GET_LUXURY_VILLA_STARTED:
      return {
        ...state,
        villa: {
          ...state.villa,
          loading: true,
          error: false,
        },
      };
    case GET_LUXURY_VILLA_ERROR:
      return {
        ...state,
        villa: {
          ...state.villa,
          loading: false,
          error: true,
        },
      };
    case GET_LUXURY_APPARTMENT:
      return {
        ...state,
        apartment: {
          ...state.apartment,
          loading: false,
          error: false,
          data: action.payload.rows,
        },
      };
    case GET_LUXURY_APPARTMENT_STARTED:
      return {
        ...state,
        apartment: {
          ...state.apartment,
          loading: true,
          error: false,
        },
      };
    case GET_LUXURY_APPARTMENT_ERROR:
      return {
        ...state,
        apartment: {
          ...state.apartment,
          loading: false,
          error: true,
        },
      };
    case GET_LUXURY_TOWNHOUSE:
      return {
        ...state,
        townhouse: {
          ...state.townhouse,
          loading: false,
          error: false,
          data: action.payload.rows,
        },
      };
    case GET_LUXURY_TOWNHOUSE_STARTED:
      return {
        ...state,
        townhouse: {
          ...state.townhouse,
          loading: true,
          error: false,
        },
      };
    case GET_LUXURY_TOWNHOUSE_ERROR:
      return {
        ...state,
        townhouse: {
          ...state.townhouse,
          loading: false,
          error: true,
        },
      };
    case GET_LUXURY_PENTHOUSE:
      return {
        ...state,
        penthouse: {
          ...state.penthouse,
          loading: false,
          error: false,
          data: action.payload.rows,
        },
      };
    case GET_LUXURY_PENTHOUSE_STARTED:
      return {
        ...state,
        penthouse: {
          ...state.penthouse,
          loading: true,
          error: false,
        },
      };
    case GET_LUXURY_PENTHOUSE_ERROR:
      return {
        ...state,
        penthouse: {
          ...state.penthouse,
          loading: false,
          error: true,
        },
      };

    case GET_LUXURY_WITH_PROPERTYTYPE:
      return {
        ...state,
        luxury: {
          ...state.luxury,
          loading: false,
          error: false,
          data: action.payload.rows,
        },
      };
    case GET_LUXURY_WITH_PROPERTYTYPE_STARTED:
      return {
        ...state,
        luxury: {
          ...state.luxury,
          loading: true,
          error: false,
        },
      };
    case GET_LUXURY_WITH_PROPERTYTYPE_ERROR:
      return {
        ...state,
        luxury: {
          ...state.luxury,
          loading: false,
          error: true,
        },
      };
    default:
      return state;
  }
};

export default reducer;
