import { initialState } from './initialState';
import {
  GET_BLOG_WEB,
  GET_BLOG_WEB_STARTED,
  GET_BLOG_WEB_ERROR,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOG_WEB:
      return {
        ...state,
        error: false,
        loading: false,
        blogs: action.payload.rows,
      };
    case GET_BLOG_WEB_STARTED:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case GET_BLOG_WEB_ERROR:
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
