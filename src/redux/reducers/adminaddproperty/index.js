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
  GET_NEIGHBORHOOD_PROPERTY,
  GET_NEIGHBORHOOD_PROPERTY_STARTED,
  GET_NEIGHBORHOOD_PROPERTY_ERROR,
  GET_TAGLINE_PROPERTY,
  GET_TAGLINE_PROPERTY_STARTED,
  GET_TAGLINE_PROPERTY_ERROR,
  ADD_IMAGES_PROPERTY,
  ADD_IMAGES_PROPERTY_STARTED,
  ADD_IMAGES_PROPERTY_ERROR,
  DELETE_IMAGES_PROPERTY,
  DELETE_IMAGES_PROPERTY_STARTED,
  DELETE_IMAGES_PROPERTY_ERROR,
  GET_CITY_PROPERTY_ERROR,
  GET_CITY_PROPERTY_STARTED,
  GET_CITY_PROPERTY,
  GET_AGENT_DETAILS,
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
    case GET_AGENT_DETAILS:
      console.log(action.payload);
      return {
        ...state,
        propertyValue: {
          ...state.propertyValue,
          agentBRN: action.payload[0]?.orn,
          call: action.payload[0]?.phoneNumber,
          whatsapp: action.payload[0]?.whatsAppNumber,
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
    case ADD_IMAGES_PROPERTY:
      return {
        ...state,
        propertyValue: {
          ...state.propertyValue,
          images: [...state.propertyValue.images, action.payload],
        },
      };
    case ADD_IMAGES_PROPERTY_STARTED:
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
    case ADD_IMAGES_PROPERTY_ERROR:
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
    case DELETE_IMAGES_PROPERTY:
      const imageArray = [...state.propertyValue.images];
      const index = imageArray.indexOf(action.payload);
      imageArray.splice(index, 1);
      return {
        ...state,
        propertyValue: {
          ...state.propertyValue,
          images: [...imageArray],
        },
      };
    case DELETE_IMAGES_PROPERTY_STARTED:
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
    case DELETE_IMAGES_PROPERTY_ERROR:
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
      createdPropertyValue.emirate = propVal.address.emirate
        ? propVal.address.emirate
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

    case GET_NEIGHBORHOOD_PROPERTY:
      const neighborhood = action.payload.rows.map(a => {
        return {
          name: a.title,
          value: a.title,
        };
      });
      return {
        ...state,
        propertyOptions: {
          ...state.propertyOptions,
          neighbor: neighborhood,
        },
      };
    case GET_NEIGHBORHOOD_PROPERTY_STARTED:
      return {
        ...state,
      };
    case GET_NEIGHBORHOOD_PROPERTY_ERROR:
      return {
        ...state,
      };
    case GET_TAGLINE_PROPERTY:
      const tagline = action.payload.rows.map(a => {
        return {
          name: a.title,
          value: a.id,
        };
      });
      return {
        ...state,
        propertyOptions: {
          ...state.propertyOptions,
          tagline: tagline,
        },
      };
    case GET_TAGLINE_PROPERTY_STARTED:
      return {
        ...state,
      };
    case GET_TAGLINE_PROPERTY_ERROR:
      return {
        ...state,
      };
    case GET_CITY_PROPERTY:
      const city = action.payload?.map(a => {
        return {
          name: a.name,
          value: a.name,
        };
      });
      return {
        ...state,
        propertyOptions: {
          ...state.propertyOptions,
          city,
        },
      };
    case GET_CITY_PROPERTY_STARTED:
      return {
        ...state,
      };
    case GET_CITY_PROPERTY_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
