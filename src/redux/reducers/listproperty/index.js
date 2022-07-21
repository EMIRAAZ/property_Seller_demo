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
  GET_PROPERTY_NEIGHBORHOOD_SALE,
  GET_PROPERTY_NEIGHBORHOOD_SALE_STARTED,
  GET_PROPERTY_NEIGHBORHOOD_SALE_ERROR,
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
        featured: {
          ...state.featured,
          error: false,
          loading: false,
          data: action.payload.rows,
          count: action.payload.count,
        },
      };
    case GET_CAT_FEATURED_STARTED:
      return {
        ...state,
        featured: {
          ...state.featured,
          error: false,
          loading: true,
        },
      };
    case GET_CAT_FEATURED_ERROR:
      return {
        ...state,
        featured: {
          ...state.featured,
          error: true,
          loading: false,
        },
      };
    case GET_RTMIN:
      return {
        ...state,
        readyToMoveIn: {
          ...state.readyToMoveIn,
          error: false,
          loading: false,
          data: action.payload.rows,
          count: action.payload.count,
        },
      };
    case GET_RTMIN_STARTED:
      return {
        ...state,
        readyToMoveIn: {
          ...state.readyToMoveIn,
          error: false,
          loading: true,
        },
      };
    case GET_RTMIN_ERROR:
      return {
        ...state,
        readyToMoveIn: {
          ...state.readyToMoveIn,
          error: true,
          loading: false,
        },
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
            location: action.payload && removeDuplicate(action.payload[0]),
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

    case GET_PROPERTY_NEIGHBORHOOD_SALE:
      return {
        ...state,
        propWithNeighbor: {
          ...state.propWithNeighbor,
          error: false,
          loading: false,
          data: action.payload.rows,
          count: action.payload.count,
        },
      };
    case GET_PROPERTY_NEIGHBORHOOD_SALE_STARTED:
      return {
        ...state,
        propWithNeighbor: {
          ...state.propWithNeighbor,
          error: false,
          loading: true,
        },
      };
    case GET_PROPERTY_NEIGHBORHOOD_SALE_ERROR:
      return {
        ...state,
        propWithNeighbor: {
          ...state.propWithNeighbor,
          error: true,
          loading: false,
        },
      };
    default:
      return state;
  }
};
const removeDuplicate = (array = []) => {
  const newArray = [...array];
  const uniqueTitle = [];
  const uniqueArray = [];
  for (let i = 0; i < newArray.length; i++) {
    if (!uniqueTitle.includes(newArray[i].placeAddress)) {
      uniqueTitle.push(newArray[i].placeAddress);
      uniqueArray.push(newArray[i]);
    }
  }
  return uniqueArray;
};

export default reducer;
