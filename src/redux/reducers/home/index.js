import { initialState } from './initialState';
import {
  GET_HOME_PROPERTY,
  CLEAR_HOME_PROPERTY,
  GET_HOME_PROPERTY_ERROR,
  GET_HOME_PROPERTY_STARTED,
  GET_HOME_LOCATION_SEARCH,
  GET_HOME_LOCATION_SEARCH_ERROR,
  GET_HOME_LOCATION_SEARCH_STARTED,
  HOME_SEARCH_INPUT_CHANGE_ITEM,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_HOME_PROPERTY:
      return {
        ...state,
        homeProperty: {
          ...state.homeProperty,
          error: false,
          loading: false,
          property: [],
          count: 0,
        },
      };
    case GET_HOME_PROPERTY:
      return {
        ...state,
        homeProperty: {
          ...state.homeProperty,
          error: false,
          loading: false,
          property: action.payload.rows,
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
          property: [],
          loading: false,
        },
      };
    case HOME_SEARCH_INPUT_CHANGE_ITEM:
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
            location:
              action.payload[0] &&
              drawLocationFromApi(action.payload[0], action.keyword),
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
