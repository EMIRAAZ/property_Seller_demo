import { initialState } from './initialState';
import {
  ADMIN_PROPERTY_INPUT_CHANGE,
  ADD_ADMIN_PROPERTY,
  ADD_ADMIN_PROPERTY_STARTED,
  ADD_ADMIN_PROPERTY_ERROR,
  GET_AGENT_PROPERTY,
  GET_AGENT_PROPERTY_ERROR,
  GET_AGENT_PROPERTY_STARTED,
  GET_AMENITY_PROPERTY,
  GET_AMENITY_PROPERTY_ERROR,
  GET_AMENITY_PROPERTY_STARTED,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_PROPERTY_INPUT_CHANGE:
      return {
        ...state,
        propertyValue: {
          ...state.propertyValue,
          [action.payload.key]: action.payload.value,
        },
      };
    case ADD_ADMIN_PROPERTY:
      return {
        ...state,
        env: {
          ...state,
          error: false,
          loading: false,
          success: true,
        },
      };
    case ADD_ADMIN_PROPERTY_STARTED:
      return {
        ...state,
        env: {
          ...state,
          error: false,
          loading: true,
          success: true,
        },
      };
    case ADD_ADMIN_PROPERTY_ERROR:
      return {
        ...state,
        env: {
          ...state,
          error: true,
          loading: false,
          success: false,
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
        propertyOptions: {
          ...state.propertyOptions,
          agent: agent,
        },
      };
    case GET_AGENT_PROPERTY_STARTED:
      return {
        ...state,
      };
    case GET_AGENT_PROPERTY_ERROR:
      return {
        ...state,
      };
    case GET_AMENITY_PROPERTY:
      const amenity = action.payload.rows.map(a => {
        return {
          name: a.username,
          amenityLogo: a.amenityLogo,
          value: a.id,
        };
      });
      return {
        ...state,
        propertyOptions: {
          ...state.propertyOptions,
          amenities: amenity,
        },
      };
    case GET_AMENITY_PROPERTY_STARTED:
      return {
        ...state,
      };
    case GET_AMENITY_PROPERTY_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
