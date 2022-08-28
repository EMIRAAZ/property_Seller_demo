import { initialState } from './initialState';
import {
  GET_BLOG_WEB,
  GET_BLOG_WEB_STARTED,
  GET_BLOG_WEB_ERROR,
  GET_BLOG_STARTED_BY_ID,
  GET_BLOG_BY_ID,
  GET_BLOG_ERROR_BY_ID,
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
    case GET_BLOG_BY_ID:
      return {
        ...state,
        singleBlog: {
          error: false,
          loading: false,
          blog: action.payload,
        },
      };
    case GET_BLOG_STARTED_BY_ID:
      return {
        ...state,
        singleBlog: {
          error: false,
          loading: true,
        },
      };
    case GET_BLOG_ERROR_BY_ID:
      return {
        ...state,
        singleBlog: {
          error: true,
          loading: false,
        },
      };
    default:
      return state;
  }
};

export default reducer;
