import { initialState } from './initialState';
import {
  GET_TAGHEAD_ADMIN,
  GET_TAGHEAD_ADMIN_ERROR,
  GET_TAGHEAD_ADMIN_STARTED,
  ADD_ADMIN_TAGHEAD,
  ADD_ADMIN_TAGHEAD_STARTED,
  ADD_ADMIN_TAGHEAD_ERROR,
  ADMIN_TAGHEAD_INPUT_CHANGE,
  GET_TAGHEAD_ADMIN_BY_ID,
  GET_TAGHEAD_ADMIN_STARTED_BY_ID,
  GET_TAGHEAD_ADMIN_ERROR_BY_ID,
  CLEAR_ADD_TAGHEAD,
  DELETE_ADMIN_TAGHEAD_ERROR,
  DELETE_ADMIN_TAGHEAD_STARTED,
  DELETE_ADMIN_TAGHEAD,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_TAGHEAD_INPUT_CHANGE:
      return {
        ...state,
        tagheadValue: {
          ...state.tagheadValue,
          [action.payload.key]: action.payload.value,
        },
      };
    case GET_TAGHEAD_ADMIN:
      return {
        ...state,
        error: false,
        loading: false,
        taghead: action.payload,
      };
    case GET_TAGHEAD_ADMIN_STARTED:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case GET_TAGHEAD_ADMIN_ERROR:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case ADD_ADMIN_TAGHEAD:
      return {
        ...state,
        env: {
          error: false,
          loading: false,
        },
      };
    case ADD_ADMIN_TAGHEAD_STARTED:
      return {
        ...state,
        env: {
          error: false,
          loading: true,
        },
      };
    case ADD_ADMIN_TAGHEAD_ERROR:
      return {
        ...state,
        env: {
          error: true,
          loading: false,
        },
      };
    case GET_TAGHEAD_ADMIN_BY_ID:
      let tagheadVal =
        action.payload && action.payload.length && action.payload[0];

      const newAgentValue = { ...state.tagheadValue };
      const createdAgentValue = {};

      for (const key in tagheadVal) {
        if (newAgentValue.hasOwnProperty(key)) {
          createdAgentValue[key] = tagheadVal[key];
        }
      }
      return {
        ...state,
        tagheadValue: {
          ...state.tagheadValue,
          ...createdAgentValue,
        },
      };
    case GET_TAGHEAD_ADMIN_STARTED_BY_ID:
      return {
        ...state,
      };
    case GET_TAGHEAD_ADMIN_ERROR_BY_ID:
      return {
        ...state,
      };
    case CLEAR_ADD_TAGHEAD:
      return {
        ...state,
        tagheadValue: {
          ...initialState.tagheadValue,
        },
      };
    case DELETE_ADMIN_TAGHEAD_STARTED:
      return {
        ...state,
      };
    case DELETE_ADMIN_TAGHEAD:
      return {
        ...state,
      };
    case DELETE_ADMIN_TAGHEAD_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
