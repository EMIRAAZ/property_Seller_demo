import { initialState } from './initialState';
import {
  GET_ADMIN_AGENT_BY_ID,
  GET_ADMIN_AGENT_BY_ID_STARTED,
  GET_ADMIN_AGENT_BY_ID_ERROR,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADMIN_AGENCY_INPUT_CHANGE:
    //   return {
    //     ...state,
    //     agentValue: {
    //       ...state.agentValue,
    //       [action.payload.key]: action.payload.value,
    //     },
    //   };
    case GET_ADMIN_AGENT_BY_ID:
      let agentVal =
        action.payload && action.payload.length && action.payload[0];

      const newAgentValue = { ...state.agentValue };
      const createdAgentValue = {};

      for (const key in agentVal) {
        if (newAgentValue.hasOwnProperty(key)) {
          createdAgentValue[key] = agentVal[key];
        }
      }
      return {
        ...state,
        agentValue: {
          ...state.agentValue,
          ...createdAgentValue,
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
    default:
      return state;
  }
};

export default reducer;
