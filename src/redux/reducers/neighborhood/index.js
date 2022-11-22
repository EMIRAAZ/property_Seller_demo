import { initialState } from './initialState';
import {
  GET_NEIGHBORHOOD_ADMIN,
  GET_NEIGHBORHOOD_ADMIN_ERROR,
  GET_NEIGHBORHOOD_ADMIN_STARTED,
  ADD_ADMIN_NEIGHBORHOOD,
  ADD_ADMIN_NEIGHBORHOOD_STARTED,
  ADD_ADMIN_NEIGHBORHOOD_ERROR,
  ADMIN_NEIGHBORHOOD_INPUT_CHANGE,
  GET_NEIGHBORHOOD_ADMIN_BY_ID,
  GET_NEIGHBORHOOD_ADMIN_STARTED_BY_ID,
  GET_NEIGHBORHOOD_ADMIN_ERROR_BY_ID,
  CLEAR_ADD_NEIGHBORHOOD,
  DELETE_ADMIN_NEIGHBORHOOD_ERROR,
  DELETE_ADMIN_NEIGHBORHOOD_STARTED,
  DELETE_ADMIN_NEIGHBORHOOD,
  ADD_NEIGHBORHOOD_IMAGE,
  ADD_NEIGHBORHOOD_IMAGE_STARTED,
  ADD_NEIGHBORHOOD_IMAGE_ERROR,
  DELETE_NEIGHBORHOOD_IMAGE,
  DELETE_NEIGHBORHOOD_IMAGE_STARTED,
  DELETE_NEIGHBORHOOD_IMAGE_ERROR,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_NEIGHBORHOOD_INPUT_CHANGE:
      return {
        ...state,
        neighborValue: {
          ...state.neighborValue,
          [action.payload.key]: action.payload.value,
        },
      };
    case GET_NEIGHBORHOOD_ADMIN:
      return {
        ...state,
        error: false,
        loading: false,
        neighbor: action.payload,
      };
    case GET_NEIGHBORHOOD_ADMIN_STARTED:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case GET_NEIGHBORHOOD_ADMIN_ERROR:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case ADD_ADMIN_NEIGHBORHOOD:
      return {
        ...state,
        env: {
          error: false,
          loading: false,
        },
      };
    case ADD_ADMIN_NEIGHBORHOOD_STARTED:
      return {
        ...state,
        env: {
          error: false,
          loading: true,
        },
      };
    case ADD_ADMIN_NEIGHBORHOOD_ERROR:
      return {
        ...state,
        env: {
          error: true,
          loading: false,
        },
      };
    case GET_NEIGHBORHOOD_ADMIN_BY_ID:
      let neighborVal =
        action.payload && action.payload.length && action.payload[0];

      const newAgentValue = { ...state.neighborValue };
      const createdAgentValue = {};

      for (const key in neighborVal) {
        if (newAgentValue.hasOwnProperty(key)) {
          createdAgentValue[key] = neighborVal[key];
        }
      }
      return {
        ...state,
        neighborValue: {
          ...state.neighborValue,
          ...createdAgentValue,
          images: createdAgentValue.images,
        },
      };
    case GET_NEIGHBORHOOD_ADMIN_STARTED_BY_ID:
      return {
        ...state,
      };
    case GET_NEIGHBORHOOD_ADMIN_ERROR_BY_ID:
      return {
        ...state,
      };
    case CLEAR_ADD_NEIGHBORHOOD:
      return {
        ...state,
        neighborValue: {
          ...initialState.neighborValue,
        },
      };
    case DELETE_ADMIN_NEIGHBORHOOD_STARTED:
      return {
        ...state,
      };
    case DELETE_ADMIN_NEIGHBORHOOD:
      return {
        ...state,
      };
    case DELETE_ADMIN_NEIGHBORHOOD_ERROR:
      return {
        ...state,
      };
    case ADD_NEIGHBORHOOD_IMAGE:
      return {
        ...state,
        neighborValue: {
          ...state.neighborValue,
          image: action.payload,
        },
      };
    case ADD_NEIGHBORHOOD_IMAGE_STARTED:
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
    case ADD_NEIGHBORHOOD_IMAGE_ERROR:
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
    case DELETE_NEIGHBORHOOD_IMAGE:
      return {
        ...state,
        neighborValue: {
          ...state.neighborValue,
          image: '',
        },
      };
    case DELETE_NEIGHBORHOOD_IMAGE_STARTED:
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
    case DELETE_NEIGHBORHOOD_IMAGE_ERROR:
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
