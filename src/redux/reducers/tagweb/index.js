import { initialState } from './initialState';
import {
  GET_TAGLINE_WEB,
  GET_TAGLINE_WEB_ERROR,
  GET_TAGLINE_WEB_STARTED,
  GET_TAGHEAD_WEB,
  GET_TAGHEAD_WEB_ERROR,
  GET_TAGHEAD_WEB_STARTED,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TAGLINE_WEB:
      return {
        ...state,
        error: false,
        loading: false,
        tagline: action.payload,
      };
    case GET_TAGLINE_WEB_STARTED:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case GET_TAGLINE_WEB_ERROR:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case GET_TAGHEAD_WEB:
      return {
        ...state,
        error: false,
        loading: false,
        taghead: action.payload,
      };
    case GET_TAGHEAD_WEB_STARTED:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case GET_TAGHEAD_WEB_ERROR:
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
