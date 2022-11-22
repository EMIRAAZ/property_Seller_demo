import { initialState } from './initialState';
import {
  GET_BLOG_ADMIN,
  GET_BLOG_ADMIN_ERROR,
  GET_BLOG_ADMIN_STARTED,
  ADD_ADMIN_BLOG,
  ADD_ADMIN_BLOG_STARTED,
  ADD_ADMIN_BLOG_ERROR,
  ADMIN_BLOG_INPUT_CHANGE,
  GET_BLOG_ADMIN_BY_ID,
  GET_BLOG_ADMIN_STARTED_BY_ID,
  GET_BLOG_ADMIN_ERROR_BY_ID,
  CLEAR_ADD_BLOG,
  DELETE_ADMIN_BLOG_ERROR,
  DELETE_ADMIN_BLOG_STARTED,
  DELETE_ADMIN_BLOG,
  ADD_BLOG_IMAGE_STARTED,
  ADD_BLOG_IMAGE,
  ADD_BLOG_IMAGE_ERROR,
  DELETE_BLOG_IMAGE_STARTED,
  DELETE_BLOG_IMAGE,
  DELETE_BLOG_IMAGE_ERROR,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_BLOG_INPUT_CHANGE:
      return {
        ...state,
        blogValue: {
          ...state.blogValue,
          [action.payload.key]: action.payload.value,
        },
      };
    case GET_BLOG_ADMIN:
      return {
        ...state,
        error: false,
        loading: false,
        blog: action.payload,
      };
    case GET_BLOG_ADMIN_STARTED:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case GET_BLOG_ADMIN_ERROR:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case ADD_ADMIN_BLOG:
      return {
        ...state,
        env: {
          error: false,
          loading: false,
        },
      };
    case ADD_ADMIN_BLOG_STARTED:
      return {
        ...state,
        env: {
          error: false,
          loading: true,
        },
      };
    case ADD_ADMIN_BLOG_ERROR:
      return {
        ...state,
        env: {
          error: true,
          loading: false,
        },
      };
    case GET_BLOG_ADMIN_BY_ID:
      let blogVal =
        action.payload && action.payload.length && action.payload[0];

      const newAgentValue = { ...state.blogValue };
      const createdAgentValue = {};

      for (const key in blogVal) {
        if (newAgentValue.hasOwnProperty(key)) {
          createdAgentValue[key] = blogVal[key];
        }
      }
      return {
        ...state,
        blogValue: {
          ...state.blogValue,
          ...createdAgentValue,
          images: createdAgentValue.images,
        },
      };
    case GET_BLOG_ADMIN_STARTED_BY_ID:
      return {
        ...state,
      };
    case GET_BLOG_ADMIN_ERROR_BY_ID:
      return {
        ...state,
      };
    case CLEAR_ADD_BLOG:
      return {
        ...state,
        blogValue: {
          ...initialState.blogValue,
        },
      };
    case DELETE_ADMIN_BLOG_STARTED:
      return {
        ...state,
      };
    case DELETE_ADMIN_BLOG:
      return {
        ...state,
      };
    case DELETE_ADMIN_BLOG_ERROR:
      return {
        ...state,
      };
    case ADD_BLOG_IMAGE:
      return {
        ...state,
        blogValue: {
          ...state.blogValue,
          image: action.payload,
        },
      };
    case ADD_BLOG_IMAGE_STARTED:
      return {
        ...state,
        env: {
          ...state.env,
          images: {
            error: false,
            loading: true,
          },
        },
      };
    case ADD_BLOG_IMAGE_ERROR:
      return {
        ...state,
        env: {
          ...state.env,
          images: {
            error: true,
            loading: false,
          },
        },
      };
    case DELETE_BLOG_IMAGE:
      return {
        ...state,
        blogValue: {
          ...state.blogValue,
          image: '',
        },
      };
    case DELETE_BLOG_IMAGE_STARTED:
      return {
        ...state,
        env: {
          ...state.env,
          images: {
            error: false,
            loading: true,
          },
        },
      };
    case DELETE_BLOG_IMAGE_ERROR:
      return {
        ...state,
        env: {
          ...state.env,
          images: {
            error: true,
            loading: false,
          },
        },
      };
    default:
      return state;
  }
};

export default reducer;
