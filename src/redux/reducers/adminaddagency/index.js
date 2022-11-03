import { initialState } from './initialState';
import {
  ADD_ADMIN_AGENCY,
  ADD_ADMIN_AGENCY_ERROR,
  ADD_ADMIN_AGENCY_STARTED,
  ADMIN_AGENCY_INPUT_CHANGE,
  EDIT_ADMIN_AGENCY,
  EDIT_ADMIN_AGENCY_ERROR,
  EDIT_ADMIN_AGENCY_STARTED,
  GET_ADMIN_AGENCY_BY_ID,
  GET_ADMIN_AGENCY_BY_ID_ERROR,
  GET_ADMIN_AGENCY_BY_ID_STARTED,
  CLEAR_ADD_AGENCY,
  GET_ADMIN_AGENCY_AGENT,
  GET_ADMIN_AGENCY_AGENT_STARTED,
  GET_ADMIN_AGENCY_AGENT_ERROR,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_AGENCY_INPUT_CHANGE:
      return {
        ...state,
        agencyValue: {
          ...state.agencyValue,
          [action.payload.key]: action.payload.value,
        },
      };
    case ADD_ADMIN_AGENCY:
      return {
        ...state,
        env: {
          ...state,
          error: false,
          loading: false,
          success: true,
        },
      };

    case ADD_ADMIN_AGENCY_STARTED:
      return {
        ...state,
        env: {
          ...state,
          error: false,
          loading: true,
          success: true,
        },
      };
    case ADD_ADMIN_AGENCY_ERROR:
      return {
        ...state,
        env: {
          ...state,
          error: true,
          loading: false,
          success: false,
        },
      };
    case EDIT_ADMIN_AGENCY:
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
    case EDIT_ADMIN_AGENCY_STARTED:
      return {
        ...state,
        env: {
          ...state,
          error: false,
          loading: true,
          success: true,
        },
      };
    case EDIT_ADMIN_AGENCY_ERROR:
      return {
        ...state,
        env: {
          ...state,
          error: true,
          loading: false,
          success: false,
        },
      };
    case GET_ADMIN_AGENCY_BY_ID:
      let agencyVal =
        action.payload && action.payload.length && action.payload[0];

      const newAgencyValue = { ...state.agencyValue };
      const createdAgencyValue = {};

      for (const key in agencyVal) {
        if (newAgencyValue.hasOwnProperty(key)) {
          createdAgencyValue[key] = agencyVal[key];
        }
      }
      createdAgencyValue.password = '';

      return {
        ...state,
        agencyValue: {
          ...state.agencyValue,
          ...createdAgencyValue,
          agencyLogo: [createdAgencyValue.agencyLogo],
        },
      };
    case GET_ADMIN_AGENCY_BY_ID_STARTED:
      return {
        ...state,
      };
    case GET_ADMIN_AGENCY_BY_ID_ERROR:
      return {
        ...state,
      };
    case CLEAR_ADD_AGENCY:
      return {
        ...initialState,
      };
    case GET_ADMIN_AGENCY_AGENT:
      return {
        ...state,
        agentValue: {
          ...state.agentValue,
          error: false,
          success: false,
          loading: false,
          agent: action.payload ? action.payload[0] : [],
        },
      };
    case GET_ADMIN_AGENCY_AGENT_STARTED:
      return {
        ...state,
        agentValue: {
          ...state.agentValue,
          error: false,
          success: false,
          loading: true,
        },
      };
    case GET_ADMIN_AGENCY_AGENT_ERROR:
      return {
        ...state,
        agentValue: {
          ...state.agentValue,
          error: true,
          success: false,
          loading: false,
        },
      };
    default:
      return state;
  }
};

export default reducer;
