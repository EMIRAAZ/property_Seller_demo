import { initialState } from './initialState';
import {
  GET_CAT_FEATURED,
  GET_CAT_FEATURED_ERROR,
  GET_CAT_FEATURED_STARTED,
  GET_RTMIN_STARTED,
  GET_RTMIN,
  GET_RTMIN_ERROR,
  ON_CHANGE_LIST_PAGE_PROPERTY_INPUT,
  GET_LISTPROP_LOCATION_SEARCH,
  GET_LISTPROP_LOCATION_SEARCH_ERROR,
  GET_LISTPROP_LOCATION_SEARCH_STARTED,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_CHANGE_LIST_PAGE_PROPERTY_INPUT:
      return {
        ...state,
        listSearch: {
          ...state.listSearch,
          [action.payload.key]: action.payload.value,
        },
      };
    case GET_CAT_FEATURED:
      return {
        ...state,
        error: false,
        loading: false,
        featured: action.payload.rows,
      };
    case GET_CAT_FEATURED_STARTED:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case GET_CAT_FEATURED_ERROR:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case GET_RTMIN:
      return {
        ...state,
        readyToMoveIn: action.payload.rows,
      };
    case GET_RTMIN_STARTED:
      return {
        ...state,
      };
    case GET_RTMIN_ERROR:
      return {
        ...state,
      };
    case GET_LISTPROP_LOCATION_SEARCH:
      return {
        ...state,
        listSearch: {
          ...state.listSearch,
          locationSearch: {
            ...state.listSearch.locationSearch,
            error: false,
            loading: false,
            location: action.payload && action.payload[0],
          },
        },
      };
    case GET_LISTPROP_LOCATION_SEARCH_STARTED:
      return {
        ...state,
        listSearch: {
          ...state.listSearch,
          locationSearch: {
            ...state.listSearch.locationSearch,
            error: false,
            loading: true,
          },
        },
      };
    case GET_LISTPROP_LOCATION_SEARCH_ERROR:
      return {
        ...state,
        listSearch: {
          ...state.listSearch,
          locationSearch: {
            ...state.listSearch.locationSearch,
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
