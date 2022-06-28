import { initialState } from './initialState';
import {
  GET_HOME_PROPERTY,
  GET_HOME_PROPERTY_ERROR,
  GET_HOME_PROPERTY_STARTED,
  HOME_SEARCH_INPUT_CHANGE,
  GET_HOME_LOCATION_SEARCH,
  GET_HOME_LOCATION_SEARCH_ERROR,
  GET_HOME_LOCATION_SEARCH_STARTED,
  GET_HOME_FEATURED,
  GET_HOME_FEATURED_STARTED,
  GET_HOME_FEATURED_ERROR,
  GET_HOME_LUXURY,
  GET_HOME_LUXURY_STARTED,
  GET_HOME_LUXURY_ERROR,
  CHANGE_HOME_FEATURED_PAGE,
  CHANGE_HOME_LUXURY_PAGE,
  CHANGE_HOME_PROPERTY_PAGE,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_HOME_FEATURED_PAGE:
      return {
        ...state,
        homeFeatured: {
          ...state.homeFeatured,
          currentPage: action.payload,
        },
      };
    case CHANGE_HOME_PROPERTY_PAGE:
      return {
        ...state,
        homeProperty: {
          ...state.homeProperty,
          currentPage: action.payload,
        },
      };
    case CHANGE_HOME_LUXURY_PAGE:
      return {
        ...state,
        homeLuxury: {
          ...state.homeLuxury,
          currentPage: action.payload,
        },
      };
    case GET_HOME_PROPERTY:
      console.log('fired');
      return {
        ...state,
        homeProperty: {
          ...state.homeProperty,
          error: false,
          loading: false,
          property: [...state.homeProperty.property, ...action.payload.rows],
          count: action.payload.count,
        },
      };
    case GET_HOME_PROPERTY_STARTED:
      return {
        ...state,
        homeProperty: {
          ...state.homeProperty,
          error: false,
          loading: true,
          params: action.payload,
        },
      };
    case GET_HOME_PROPERTY_ERROR:
      return {
        ...state,
        homeProperty: {
          ...state.homeProperty,
          error: true,
          loading: false,
        },
      };
    case HOME_SEARCH_INPUT_CHANGE:
      return {
        ...state,
        homeSearch: {
          ...state.homeSearch,
          [action.payload.key]: action.payload.value,
        },
      };
    case GET_HOME_LOCATION_SEARCH:
      return {
        ...state,
        homeSearch: {
          ...state.homeSearch,
          locationSearch: {
            ...state.homeSearch.locationSearch,
            error: false,
            loading: false,
            location: action.payload && action.payload[0],
          },
        },
      };
    case GET_HOME_LOCATION_SEARCH_STARTED:
      return {
        ...state,
        homeSearch: {
          ...state.homeSearch,
          locationSearch: {
            ...state.homeSearch.locationSearch,
            error: false,
            loading: true,
          },
        },
      };
    case GET_HOME_LOCATION_SEARCH_ERROR:
      return {
        ...state,
        homeSearch: {
          ...state.homeSearch,
          locationSearch: {
            ...state.homeSearch.locationSearch,
            error: true,
            loading: false,
          },
        },
      };
    case GET_HOME_FEATURED:
      return {
        ...state,
        homeFeatured: {
          ...state.homeFeatured,
          loading: false,
          error: false,
          featured: action.payload.rows,
          count: action.payload.count,
        },
      };
    case GET_HOME_FEATURED_STARTED:
      return {
        ...state,
        homeFeatured: {
          ...state.homeFeatured,
          loading: true,
          error: false,
        },
      };
    case GET_HOME_FEATURED_ERROR:
      return {
        ...state,
        homeFeatured: {
          ...state.homeFeatured,
          loading: false,
          error: true,
        },
      };
    case GET_HOME_LUXURY:
      return {
        ...state,
        homeLuxury: {
          ...state.homeLuxury,
          loading: false,
          error: false,
          luxury: action.payload.rows,
        },
      };
    case GET_HOME_LUXURY_STARTED:
      return {
        ...state,
        homeLuxury: {
          ...state.homeLuxury,
          loading: true,
          error: false,
        },
      };
    case GET_HOME_LUXURY_ERROR:
      return {
        ...state,
        homeLuxury: {
          ...state.homeLuxury,
          loading: false,
          error: true,
        },
      };
    default:
      return state;
  }
};

export default reducer;
