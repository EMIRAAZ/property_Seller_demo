import { initialState } from './initialState';
import {
  GET_AMENITY_ADMIN,
  GET_AMENITY_ADMIN_ERROR,
  GET_AMENITY_ADMIN_STARTED,
  ADD_ADMIN_AMENITY,
  ADD_ADMIN_AMENITY_STARTED,
  ADD_ADMIN_AMENITY_ERROR,
  ADMIN_AMENITY_INPUT_CHANGE,
  GET_AMENITY_ADMIN_BY_ID,
  GET_AMENITY_ADMIN_STARTED_BY_ID,
  GET_AMENITY_ADMIN_ERROR_BY_ID,
  CLEAR_ADD_AMENITY,
  DELETE_ADMIN_AMENITY_ERROR,
  DELETE_ADMIN_AMENITY_STARTED,
  DELETE_ADMIN_AMENITY,
  DELETE_LOGO_AMENITY_STARTED,
  DELETE_LOGO_AMENITY,
  DELETE_LOGO_AMENITY_ERROR,
  ADD_LOGO_AMENITY_STARTED,
  ADD_LOGO_AMENITY,
  ADD_LOGO_AMENITY_ERROR,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_AMENITY_INPUT_CHANGE:
      return {
        ...state,
        amenityValue: {
          ...state.amenityValue,
          [action.payload.key]: action.payload.value,
        },
      };
    case GET_AMENITY_ADMIN:
      return {
        ...state,
        error: false,
        loading: false,
        amenity: action.payload,
      };
    case GET_AMENITY_ADMIN_STARTED:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case GET_AMENITY_ADMIN_ERROR:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case ADD_ADMIN_AMENITY:
      return {
        ...state,
        env: {
          error: false,
          loading: false,
        },
      };
    case ADD_ADMIN_AMENITY_STARTED:
      return {
        ...state,
        env: {
          error: false,
          loading: true,
        },
      };
    case ADD_ADMIN_AMENITY_ERROR:
      return {
        ...state,
        env: {
          error: true,
          loading: false,
        },
      };
    case GET_AMENITY_ADMIN_BY_ID:
      let amenityVal =
        action.payload && action.payload.length && action.payload[0];

      const newAgentValue = { ...state.amenityValue };
      const createdAgentValue = {};

      for (const key in amenityVal) {
        if (newAgentValue.hasOwnProperty(key)) {
          createdAgentValue[key] = amenityVal[key];
        }
      }
      return {
        ...state,
        amenityValue: {
          ...state.amenityValue,
          ...createdAgentValue,
          amenityLogo: createdAgentValue.amenityLogo,
        },
      };
    case GET_AMENITY_ADMIN_STARTED_BY_ID:
      return {
        ...state,
      };
    case GET_AMENITY_ADMIN_ERROR_BY_ID:
      return {
        ...state,
      };
    case CLEAR_ADD_AMENITY:
      return {
        ...state,
        amenityValue: {
          ...initialState.amenityValue,
        },
      };
    case DELETE_ADMIN_AMENITY_STARTED:
      return {
        ...state,
      };
    case DELETE_ADMIN_AMENITY:
      return {
        ...state,
      };
    case DELETE_ADMIN_AMENITY_ERROR:
      return {
        ...state,
      };
    case ADD_LOGO_AMENITY:
      return {
        ...state,
        amenityValue: {
          ...state.amenityValue,
          amenityLogo: action.payload,
        },
      };
    case ADD_LOGO_AMENITY_STARTED:
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
    case ADD_LOGO_AMENITY_ERROR:
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
    case DELETE_LOGO_AMENITY:
      return {
        ...state,
        amenityValue: {
          ...state.amenityValue,
          amenityLogo: '',
        },
      };
    case DELETE_LOGO_AMENITY_STARTED:
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
    case DELETE_LOGO_AMENITY_ERROR:
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
