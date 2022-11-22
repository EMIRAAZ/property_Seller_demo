import { initialState } from './initialState';
import {
  GET_AGENCY_AGENT_BY_ID,
  GET_AGENCY_AGENT_BY_ID_STARTED,
  GET_AGENCY_AGENT_BY_ID_ERROR,
  AGENCY_AGENT_INPUT_CHANGE,
  ADD_AGENCY_AGENT,
  ADD_AGENCY_AGENT_STARTED,
  ADD_AGENCY_AGENT_ERROR,
  EDIT_AGENCY_AGENT,
  EDIT_AGENCY_AGENT_ERROR,
  EDIT_AGENCY_AGENT_STARTED,
  DELETE_AGENCY_AGENT,
  DELETE_AGENCY_AGENT_STARTED,
  DELETE_AGENCY_AGENT_ERROR,
  CLEAR_ADD_AGENT,
  ADD_AGENCY_AGENT_IMAGE,
  ADD_AGENCY_AGENT_IMAGE_STARTED,
  ADD_AGENCY_AGENT_IMAGE_ERROR,
  DELETE_AGENCY_AGENT_IMAGE,
  DELETE_AGENCY_AGENT_IMAGE_STARTED,
  DELETE_AGENCY_AGENT_IMAGE_ERROR,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AGENCY_AGENT_INPUT_CHANGE:
      return {
        ...state,
        agentValue: {
          ...state.agentValue,
          ...(action.payload.key === 'languages'
            ? { languages: action.payload.value.trim().split(',') }
            : { [action.payload.key]: action.payload.value }),
        },
      };
    case GET_AGENCY_AGENT_BY_ID:
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
    case GET_AGENCY_AGENT_BY_ID_STARTED:
      return {
        ...state,
      };
    case CLEAR_ADD_AGENT:
      return {
        ...initialState,
      };
    case GET_AGENCY_AGENT_BY_ID_ERROR:
      return {
        ...state,
      };
    case ADD_AGENCY_AGENT:
      return {
        ...state,
        env: {
          ...state,
          error: false,
          loading: false,
          success: true,
        },
      };
    case ADD_AGENCY_AGENT_STARTED:
      return {
        ...state,
        env: {
          ...state,
          error: false,
          loading: true,
          success: true,
        },
      };
    case ADD_AGENCY_AGENT_ERROR:
      return {
        ...state,
        env: {
          ...state,
          error: true,
          loading: false,
          success: false,
        },
      };
    case EDIT_AGENCY_AGENT:
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
    case EDIT_AGENCY_AGENT_STARTED:
      return {
        ...state,
        env: {
          ...state,
          error: false,
          loading: true,
          success: true,
        },
      };
    case EDIT_AGENCY_AGENT_ERROR:
      return {
        ...state,
        env: {
          ...state,
          error: true,
          loading: false,
          success: false,
        },
      };
    case DELETE_AGENCY_AGENT:
      return {
        ...state,
      };
    case DELETE_AGENCY_AGENT_STARTED:
      return {
        ...state,
      };
    case DELETE_AGENCY_AGENT_ERROR:
      return {
        ...state,
      };
    case ADD_AGENCY_AGENT_IMAGE:
      return {
        ...state,
        agentValue: {
          ...state.agentValue,
          agentImage: action.payload,
        },
      };
    case ADD_AGENCY_AGENT_IMAGE_STARTED:
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
    case ADD_AGENCY_AGENT_IMAGE_ERROR:
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
    case DELETE_AGENCY_AGENT_IMAGE:
      return {
        ...state,
        agentValue: {
          ...state.agentValue,
          agentImage: '',
        },
      };
    case DELETE_AGENCY_AGENT_IMAGE_STARTED:
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
    case DELETE_AGENCY_AGENT_IMAGE_ERROR:
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
