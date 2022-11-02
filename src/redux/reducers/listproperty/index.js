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
  GET_VP,
  GET_VP_ERROR,
  GET_VP_STARTED,
  GET_PROP_TAG_STARTED,
  GET_PROP_TAG,
  GET_PROP_TAG_ERROR,
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
            location:
              action.payload[0] &&
              drawLocationFromApi(action.payload[0], action.keyword),
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
    case GET_VP:
      return {
        ...state,
        vp: {
          ...state.vp,
          error: false,
          loading: false,
          data: action.payload.rows,
          count: action.payload.count,
        },
      };
    case GET_VP_STARTED:
      return {
        ...state,
        vp: {
          ...state.vp,
          error: false,
          loading: true,
        },
      };
    case GET_VP_ERROR:
      return {
        ...state,
        vp: {
          ...state.vp,
          error: true,
          loading: false,
        },
      };

    case GET_PROP_TAG:
      return {
        ...state,
        tag: {
          ...state.tag,
          error: false,
          loading: false,
          data: action.payload.rows,
          count: action.payload.count,
        },
      };
    case GET_PROP_TAG_STARTED:
      return {
        ...state,
        tag: {
          ...state.tag,
          error: false,
          loading: true,
        },
      };
    case GET_PROP_TAG_ERROR:
      return {
        ...state,
        tag: {
          ...state.tag,
          error: true,
          loading: false,
        },
      };

    default:
      return state;
  }
};
const drawLocationFromApi = (array = [], keyword) => {
  const newArray = [...array];
  const locationArray = [];
  for (var i = 0; i < newArray.length; i++) {
    if (
      newArray[i].placeAddress &&
      newArray[i].placeAddress.toLowerCase().includes(keyword.toLowerCase()) &&
      !locationArray.includes(newArray[i].placeAddress)
    ) {
      locationArray.push(newArray[i].placeAddress);
    }
    if (
      newArray[i].city &&
      newArray[i].city.toLowerCase().includes(keyword.toLowerCase()) &&
      !locationArray.includes(newArray[i].city)
    ) {
      locationArray.push(newArray[i].city);
    }
    if (
      newArray[i].building &&
      newArray[i].building.toLowerCase().includes(keyword.toLowerCase()) &&
      !locationArray.includes(newArray[i].building)
    ) {
      locationArray.push(newArray[i].building);
    }
  }
  return locationArray;
};

export default reducer;
