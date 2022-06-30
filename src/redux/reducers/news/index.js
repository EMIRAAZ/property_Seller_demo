import { initialState } from './initialState';
import {
  GET_NEWS_ADMIN,
  GET_NEWS_ADMIN_ERROR,
  GET_NEWS_ADMIN_STARTED,
  ADD_ADMIN_NEWS,
  ADD_ADMIN_NEWS_STARTED,
  ADD_ADMIN_NEWS_ERROR,
  ADMIN_NEWS_INPUT_CHANGE,
  GET_NEWS_ADMIN_BY_ID,
  GET_NEWS_ADMIN_STARTED_BY_ID,
  GET_NEWS_ADMIN_ERROR_BY_ID,
  CLEAR_ADD_NEWS,
  DELETE_ADMIN_NEWS_ERROR,
  DELETE_ADMIN_NEWS_STARTED,
  DELETE_ADMIN_NEWS,
  GET_TOPICS_NEWS,
  GET_TOPICS_NEWS_STARTED,
  GET_TOPICS_NEWS_ERROR,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_NEWS_INPUT_CHANGE:
      return {
        ...state,
        newsValue: {
          ...state.newsValue,
          [action.payload.key]: action.payload.value,
        },
      };
    case GET_NEWS_ADMIN:
      return {
        ...state,
        error: false,
        loading: false,
        news: action.payload,
      };
    case GET_NEWS_ADMIN_STARTED:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case GET_NEWS_ADMIN_ERROR:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case ADD_ADMIN_NEWS:
      return {
        ...state,
        env: {
          error: false,
          loading: false,
        },
      };
    case ADD_ADMIN_NEWS_STARTED:
      return {
        ...state,
        env: {
          error: false,
          loading: true,
        },
      };
    case ADD_ADMIN_NEWS_ERROR:
      return {
        ...state,
        env: {
          error: true,
          loading: false,
        },
      };
    case GET_NEWS_ADMIN_BY_ID:
      let newsVal =
        action.payload && action.payload.length && action.payload[0];

      const newAgentValue = { ...state.newsValue };
      const createdAgentValue = {};

      for (const key in newsVal) {
        if (newAgentValue.hasOwnProperty(key)) {
          createdAgentValue[key] = newsVal[key];
        }
      }
      return {
        ...state,
        newsValue: {
          ...state.newsValue,
          ...createdAgentValue,
          images: createdAgentValue.images,
        },
      };
    case GET_NEWS_ADMIN_STARTED_BY_ID:
      return {
        ...state,
      };
    case GET_NEWS_ADMIN_ERROR_BY_ID:
      return {
        ...state,
      };
    case CLEAR_ADD_NEWS:
      return {
        ...state,
        newsValue: {
          ...initialState.newsValue,
        },
      };
    case DELETE_ADMIN_NEWS_STARTED:
      return {
        ...state,
      };
    case DELETE_ADMIN_NEWS:
      return {
        ...state,
      };
    case DELETE_ADMIN_NEWS_ERROR:
      return {
        ...state,
      };
    case GET_TOPICS_NEWS:
      const topics = action.payload.rows.map(a => {
        return {
          name: a.name,
          value: a.name,
        };
      });
      return {
        ...state,
        topics: topics,
      };
    case GET_TOPICS_NEWS_STARTED:
      return {
        ...state,
      };
    case GET_TOPICS_NEWS_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
