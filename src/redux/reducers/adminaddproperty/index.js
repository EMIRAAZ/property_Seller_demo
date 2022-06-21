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
  CLEAR_ADD_PROPERTY,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_PROPERTY_INPUT_CHANGE:
      if (action.payload.key === 'agentId') {
        return {
          ...state,
          propertyValue: {
            ...state.propertyValue,
            agentId: action.payload.value.split(' ')[0],
            agencyId: action.payload.value.split(' ')[1],
          },
        };
      } else {
        return {
          ...state,
          propertyValue: {
            ...state.propertyValue,
            [action.payload.key]: action.payload.value,
          },
        };
      }
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
          value: `${a.id} ${a.agencyId}`,
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
      let propVal =
        action.payload && action.payload.length && action.payload[0];

      const newPropertyValue = { ...state.propertyValue };
      const createdPropertyValue = {};

      for (const key in propVal) {
        if (newPropertyValue.hasOwnProperty(key)) {
          createdPropertyValue[key] = propVal[key];
        }
      }

      createdPropertyValue.building = propVal.address.building
        ? propVal.address.building
        : '';

      createdPropertyValue.placeAddress = propVal.address.placeAddress
        ? propVal.address.placeAddress
        : '';
      createdPropertyValue.city = propVal.address.city
        ? propVal.address.city
        : '';
      return {
        ...state,
        propertyValue: {
          ...state.propertyValue,
          ...createdPropertyValue,
        },
      };
    case GET_ADMIN_PROPERTY_BY_ID_STARTED:
      return {
        ...state,
      };
    case GET_ADMIN_PROPERTY_BY_ID_ERROR:
      return {
        ...state,
      };
    case CLEAR_ADD_PROPERTY:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;
