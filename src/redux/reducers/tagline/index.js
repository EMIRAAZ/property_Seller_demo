import { initialState } from './initialState';
import {
  GET_TAGLINE_ADMIN,
  GET_TAGLINE_ADMIN_ERROR,
  GET_TAGLINE_ADMIN_STARTED,
  ADD_ADMIN_TAGLINE,
  ADD_ADMIN_TAGLINE_STARTED,
  ADD_ADMIN_TAGLINE_ERROR,
  ADMIN_TAGLINE_INPUT_CHANGE,
  GET_TAGLINE_ADMIN_BY_ID,
  GET_TAGLINE_ADMIN_STARTED_BY_ID,
  GET_TAGLINE_ADMIN_ERROR_BY_ID,
  CLEAR_ADD_TAGLINE,
  DELETE_ADMIN_TAGLINE_ERROR,
  DELETE_ADMIN_TAGLINE_STARTED,
  DELETE_ADMIN_TAGLINE,
  GET_TAGHEAD_TAGLINE,
  GET_TAGHEAD_TAGLINE_STARTED,
  GET_TAGHEAD_TAGLINE_ERROR,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_TAGLINE_INPUT_CHANGE:
      return {
        ...state,
        taglineValue: {
          ...state.taglineValue,
          [action.payload.key]: action.payload.value,
        },
      };
    case GET_TAGLINE_ADMIN:
      return {
        ...state,
        error: false,
        loading: false,
        tagline: action.payload,
      };
    case GET_TAGLINE_ADMIN_STARTED:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case GET_TAGLINE_ADMIN_ERROR:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case ADD_ADMIN_TAGLINE:
      return {
        ...state,
        env: {
          error: false,
          loading: false,
        },
      };
    case ADD_ADMIN_TAGLINE_STARTED:
      return {
        ...state,
        env: {
          error: false,
          loading: true,
        },
      };
    case ADD_ADMIN_TAGLINE_ERROR:
      return {
        ...state,
        env: {
          error: true,
          loading: false,
        },
      };
    case GET_TAGLINE_ADMIN_BY_ID:
      let taglineVal =
        action.payload && action.payload.length && action.payload[0];

      const newAgentValue = { ...state.taglineValue };
      const createdAgentValue = {};

      for (const key in taglineVal) {
        if (newAgentValue.hasOwnProperty(key)) {
          createdAgentValue[key] = taglineVal[key];
        }
      }
      return {
        ...state,
        taglineValue: {
          ...state.taglineValue,
          ...createdAgentValue,
        },
      };
    case GET_TAGLINE_ADMIN_STARTED_BY_ID:
      return {
        ...state,
      };
    case GET_TAGLINE_ADMIN_ERROR_BY_ID:
      return {
        ...state,
      };
    case CLEAR_ADD_TAGLINE:
      return {
        ...state,
        taglineValue: {
          ...initialState.taglineValue,
        },
      };
    case DELETE_ADMIN_TAGLINE_STARTED:
      return {
        ...state,
      };
    case DELETE_ADMIN_TAGLINE:
      return {
        ...state,
      };
    case DELETE_ADMIN_TAGLINE_ERROR:
      return {
        ...state,
      };
    case GET_TAGHEAD_TAGLINE:
      const taghead = action.payload.rows.map(a => {
        return {
          name: a.title,
          value: a.id,
        };
      });
      return {
        ...state,
        taghead: taghead,
      };
    case GET_TAGHEAD_TAGLINE_STARTED:
      return {
        ...state,
      };
    case GET_TAGHEAD_TAGLINE_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
