import { initialState } from './initialState';
import {
  GET_NEIGHBORHOOD_WEB,
  GET_NEIGHBORHOOD_WEB_ERROR,
  GET_NEIGHBORHOOD_WEB_STARTED,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEIGHBORHOOD_WEB:
      return {
        ...state,
        error: false,
        loading: false,
        neighbor: action.payload,
      };
    case GET_NEIGHBORHOOD_WEB_STARTED:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case GET_NEIGHBORHOOD_WEB_ERROR:
      return {
        ...state,
        error: false,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
