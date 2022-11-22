import { initialState } from './initialState';
import {
  GET_ADMIN_AGENT_BY_ID,
  GET_ADMIN_AGENT_BY_ID_STARTED,
  GET_ADMIN_AGENT_BY_ID_ERROR,
  ADMIN_AGENT_INPUT_CHANGE,
  ADD_ADMIN_AGENT,
  ADD_ADMIN_AGENT_STARTED,
  ADD_ADMIN_AGENT_ERROR,
  EDIT_ADMIN_AGENT,
  EDIT_ADMIN_AGENT_ERROR,
  EDIT_ADMIN_AGENT_STARTED,
  DELETE_ADMIN_AGENT,
  DELETE_ADMIN_AGENT_STARTED,
  DELETE_ADMIN_AGENT_ERROR,
  ADD_AGENT_IMAGE_STARTED,
  ADD_AGENT_IMAGE,
  ADD_AGENT_IMAGE_ERROR,
  DELETE_AGENT_IMAGE_STARTED,
  DELETE_AGENT_IMAGE,
  DELETE_AGENT_IMAGE_ERROR,
  CLEAR_AGENT_DATA,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_AGENT_INPUT_CHANGE:
      return {
        ...state,
        agentValue: {
          ...state.agentValue,
          ...(action.payload.key === 'languages'
            ? { languages: action.payload.value.trim().split(',') }
            : { [action.payload.key]: action.payload.value }),
        },
      };
    case GET_ADMIN_AGENT_BY_ID:
      let agentVal =
        action.payload && action.payload.length && action.payload[0];

      const newAgentValue = { ...state.agentValue };
      const createdAgentValue = {};

      for (const key in agentVal) {
        if (newAgentValue.hasOwnProperty(key)) {
          if (key === 'languages') {
            createdAgentValue[key] = agentVal[key];
          } else createdAgentValue[key] = agentVal[key];
        }
      }
      return {
        ...state,
        agentValue: {
          ...state.agentValue,
          ...createdAgentValue,
          agentImage: createdAgentValue.agentImage,
        },
      };
    case GET_ADMIN_AGENT_BY_ID_STARTED:
      return {
        ...state,
      };
    case GET_ADMIN_AGENT_BY_ID_ERROR:
      return {
        ...state,
      };
    case ADD_ADMIN_AGENT:
      return {
        ...state,
        env: {
          ...state,
          error: false,
          loading: false,
          success: true,
        },
      };
    case ADD_ADMIN_AGENT_STARTED:
      return {
        ...state,
        env: {
          ...state,
          error: false,
          loading: true,
          success: true,
        },
      };
    case ADD_ADMIN_AGENT_ERROR:
      return {
        ...state,
        env: {
          ...state,
          error: true,
          loading: false,
          success: false,
        },
      };
    case EDIT_ADMIN_AGENT:
      return {
        ...state,
        env: {
          ...state,
          error: false,
          loading: false,
          success: true,
          editing: false,
        },
      };
    case EDIT_ADMIN_AGENT_STARTED:
      return {
        ...state,
        env: {
          ...state,
          error: false,
          loading: true,
          success: true,
        },
      };
    case EDIT_ADMIN_AGENT_ERROR:
      return {
        ...state,
        env: {
          ...state,
          error: true,
          loading: false,
          success: false,
        },
      };
    case DELETE_ADMIN_AGENT:
      return {
        ...state,
      };
    case DELETE_ADMIN_AGENT_STARTED:
      return {
        ...state,
      };
    case DELETE_ADMIN_AGENT_ERROR:
      return {
        ...state,
      };
    case ADD_AGENT_IMAGE:
      return {
        ...state,
        agentValue: {
          ...state.agentValue,
          agentImage: action.payload,
        },
      };
    case ADD_AGENT_IMAGE_STARTED:
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
    case ADD_AGENT_IMAGE_ERROR:
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
    case DELETE_AGENT_IMAGE:
      return {
        ...state,
        agentValue: {
          ...state.agentValue,
          agentImage: '',
        },
      };
    case DELETE_AGENT_IMAGE_STARTED:
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
    case DELETE_AGENT_IMAGE_ERROR:
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
    case CLEAR_AGENT_DATA:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
