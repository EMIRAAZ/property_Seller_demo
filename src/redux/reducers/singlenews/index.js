import { initialState } from './initialState';
import {
  GET_SINGLE_NEWS_WEB,
  GET_SINGLE_NEWS_WEB_STARTED,
  GET_SINGLE_NEWS_WEB_ERROR,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_NEWS_WEB:
      return {
        ...state,
        error: false,
        loading: false,
        news: action.payload,
      };
    case GET_SINGLE_NEWS_WEB_STARTED:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case GET_SINGLE_NEWS_WEB_ERROR:
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
