import { initialState } from './initialState';
import {
  LIST_AGENCY_AGENT,
  LIST_AGENCY_AGENT_STARTED,
  LIST_AGENCY_AGENT_ERROR,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_AGENCY_AGENT:
      return {
        ...state,
        loading: false,
        error: false,
        agents: action.payload,
      };
    case LIST_AGENCY_AGENT_STARTED:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case LIST_AGENCY_AGENT_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
