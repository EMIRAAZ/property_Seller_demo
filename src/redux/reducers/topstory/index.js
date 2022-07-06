import { initialState } from './initialState';
import {
  GET_TOPSTORY_WEB,
  GET_TOPSTORY_WEB_STARTED,
  GET_TOPSTORY_WEB_ERROR,
  GET_TOPSTORY_TOPICS_WEB,
  GET_TOPSTORY_TOPICS_WEB_STARTED,
  GET_TOPSTORY_TOPICS_WEB_ERROR,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOPSTORY_WEB:
      return {
        ...state,
        error: false,
        loading: false,
        news: action.payload.rows,
      };
    case GET_TOPSTORY_WEB_STARTED:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case GET_TOPSTORY_WEB_ERROR:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case GET_TOPSTORY_TOPICS_WEB:
      return {
        ...state,
        newsTopics: action.payload.rows,
      };
    case GET_TOPSTORY_TOPICS_WEB_STARTED:
      return {
        ...state,
      };
    case GET_TOPSTORY_TOPICS_WEB_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
