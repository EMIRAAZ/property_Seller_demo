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
  EDIT_ADMIN_PROPERTY,
  EDIT_ADMIN_PROPERTY_ERROR,
  EDIT_ADMIN_PROPERTY_STARTED,
  GET_ADMIN_PROPERTY_BY_ID,
  GET_ADMIN_PROPERTY_BY_ID_ERROR,
  GET_ADMIN_PROPERTY_BY_ID_STARTED,
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
          name: a.name,
          amenityLogo: a.amenityLogo,
          value: a.name,
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
    case EDIT_ADMIN_PROPERTY:
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
    case EDIT_ADMIN_PROPERTY_STARTED:
      return {
        ...state,
        env: {
          ...state,
          error: false,
          loading: true,
          success: true,
        },
      };
    case EDIT_ADMIN_PROPERTY_ERROR:
      return {
        ...state,
        env: {
          ...state,
          error: true,
          loading: false,
          success: false,
        },
      };
    case GET_ADMIN_PROPERTY_BY_ID:
      console.log(action.payload);
      return {
        ...state,
      };
    case GET_ADMIN_PROPERTY_BY_ID_STARTED:
      return {
        ...state,
      };
    case GET_ADMIN_PROPERTY_BY_ID_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
