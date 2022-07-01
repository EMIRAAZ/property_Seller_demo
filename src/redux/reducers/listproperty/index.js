import { initialState } from './initialState';
import {
  GET_CAT_FEATURED,
  GET_CAT_FEATURED_ERROR,
  GET_CAT_FEATURED_STARTED,
  GET_RTMIN_STARTED,
  GET_RTMIN,
  GET_RTMIN_ERROR,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAT_FEATURED:
      return {
        ...state,
        error: false,
        loading: false,
        featured: action.payload.rows,
      };
    case GET_CAT_FEATURED_STARTED:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case GET_CAT_FEATURED_ERROR:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case GET_RTMIN:
      return {
        ...state,
        readyToMoveIn: action.payload.rows,
      };
    case GET_RTMIN_STARTED:
      return {
        ...state,
      };
    case GET_RTMIN_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
