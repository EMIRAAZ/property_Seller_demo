import { initialState } from './initialState';
import {
  ADMIN_PROPERTY_INPUT_CHANGE,
  ADD_ADMIN_PROPERTY,
  ADD_ADMIN_PROPERTY_STARTED,
  ADD_ADMIN_PROPERTY_ERROR,
  GET_AGENT_PROPERTY,
  GET_AGENT_PROPERTY_ERROR,
  GET_AGENT_PROPERTY_STARTED,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_PROPERTY_INPUT_CHANGE:
      return {
        ...state,
        loading: true,
        property: {
          ...state.property,
          [action.payload.key]: action.payload.value,
        },
      };
    case ADD_ADMIN_PROPERTY:
      return {
        ...state,
        addAdmin: {
          ...state,
          error: false,
          loading: false,
        },
      };
    case ADD_ADMIN_PROPERTY_STARTED:
      return {
        ...state,
        addAdmin: {
          ...state,
          error: false,
          loading: true,
        },
      };
    case ADD_ADMIN_PROPERTY_ERROR:
      return {
        ...state,
        addAdmin: {
          ...state,
          error: true,
          loading: false,
        },
      };
    case GET_AGENT_PROPERTY:
      const agent = action.payload.map(a => {
        return {
          name: a.username,
          value: a.id,
        };
      });
      return {
        ...state,
        agent: agent,
      };
    case GET_AGENT_PROPERTY_STARTED:
      return {
        ...state,
      };
    case GET_AGENT_PROPERTY_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
