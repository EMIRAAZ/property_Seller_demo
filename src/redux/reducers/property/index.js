import { initialState } from './initialState';
import {
  GET_PROPERTY_BY_ID,
  GET_PROPERTY_BY_ID_ERROR,
  GET_PROPERTY_BY_ID_STARTED,
  GET_SIMILAR_PROPERTY_ERROR,
  GET_SIMILAR_PROPERTY,
  GET_SIMILAR_PROPERTY_STARTED,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROPERTY_BY_ID:
      return {
        ...state,
        error: false,
        loading: false,
        property: action.payload,
      };
    case GET_PROPERTY_BY_ID_STARTED:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case GET_PROPERTY_BY_ID_ERROR:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case GET_SIMILAR_PROPERTY:
      return {
        ...state,
        similarProperty: action.payload.rows,
      };
    case GET_SIMILAR_PROPERTY_STARTED:
      return {
        ...state,
      };
    case GET_SIMILAR_PROPERTY_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
