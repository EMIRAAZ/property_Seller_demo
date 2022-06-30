import { initialState } from './initialState';
import {
  GET_NEWSTOPICS_ADMIN,
  GET_NEWSTOPICS_ADMIN_ERROR,
  GET_NEWSTOPICS_ADMIN_STARTED,
  ADD_ADMIN_NEWSTOPICS,
  ADD_ADMIN_NEWSTOPICS_STARTED,
  ADD_ADMIN_NEWSTOPICS_ERROR,
  ADMIN_NEWSTOPICS_INPUT_CHANGE,
  GET_NEWSTOPICS_ADMIN_BY_ID,
  GET_NEWSTOPICS_ADMIN_STARTED_BY_ID,
  GET_NEWSTOPICS_ADMIN_ERROR_BY_ID,
  CLEAR_ADD_NEWSTOPICS,
  DELETE_ADMIN_NEWSTOPICS_ERROR,
  DELETE_ADMIN_NEWSTOPICS_STARTED,
  DELETE_ADMIN_NEWSTOPICS,
  GET_TOPICS_NEWS,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_NEWSTOPICS_INPUT_CHANGE:
      return {
        ...state,
        newstopicsValue: {
          ...state.newstopicsValue,
          [action.payload.key]: action.payload.value,
        },
      };
    case GET_NEWSTOPICS_ADMIN:
      return {
        ...state,
        error: false,
        loading: false,
        newstopics: action.payload,
      };
    case GET_NEWSTOPICS_ADMIN_STARTED:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case GET_NEWSTOPICS_ADMIN_ERROR:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case ADD_ADMIN_NEWSTOPICS:
      return {
        ...state,
        env: {
          error: false,
          loading: false,
        },
      };
    case ADD_ADMIN_NEWSTOPICS_STARTED:
      return {
        ...state,
        env: {
          error: false,
          loading: true,
        },
      };
    case ADD_ADMIN_NEWSTOPICS_ERROR:
      return {
        ...state,
        env: {
          error: true,
          loading: false,
        },
      };
    case GET_NEWSTOPICS_ADMIN_BY_ID:
      let newstopicsVal =
        action.payload && action.payload.length && action.payload[0];

      const newAgentValue = { ...state.newstopicsValue };
      const createdAgentValue = {};

      for (const key in newstopicsVal) {
        if (newAgentValue.hasOwnProperty(key)) {
          createdAgentValue[key] = newstopicsVal[key];
        }
      }
      return {
        ...state,
        newstopicsValue: {
          ...state.newstopicsValue,
          ...createdAgentValue,
        },
      };
    case GET_NEWSTOPICS_ADMIN_STARTED_BY_ID:
      return {
        ...state,
      };
    case GET_NEWSTOPICS_ADMIN_ERROR_BY_ID:
      return {
        ...state,
      };
    case CLEAR_ADD_NEWSTOPICS:
      return {
        ...state,
        newstopicsValue: {
          ...initialState.newstopicsValue,
        },
      };
    case DELETE_ADMIN_NEWSTOPICS_STARTED:
      return {
        ...state,
      };
    case DELETE_ADMIN_NEWSTOPICS:
      return {
        ...state,
      };
    case DELETE_ADMIN_NEWSTOPICS_ERROR:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
