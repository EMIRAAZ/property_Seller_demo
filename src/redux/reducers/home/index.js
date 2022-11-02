import { initialState } from './initialState';
import {
  GET_HOME_PROPERTY,
  CLEAR_HOME_PROPERTY,
  GET_HOME_PROPERTY_ERROR,
  GET_HOME_PROPERTY_STARTED,
  HOME_SEARCH_INPUT_CHANGE,
  GET_HOME_LOCATION_SEARCH,
  GET_HOME_LOCATION_SEARCH_ERROR,
  GET_HOME_LOCATION_SEARCH_STARTED,
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
          // property: [
          //   ...addIfNecessary(state.homeProperty.property, action.payload.rows),
          // ],
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
          // property: [],
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
    case HOME_SEARCH_INPUT_CHANGE:
      return {
        ...state,
        homeSearch: {
          ...state.homeSearch,
          [action.payload.key]: action.payload.value,
        },
      };
    case GET_HOME_LOCATION_SEARCH:
      // console.log(
      //   action.payload[0] &&
      //     drawLocationFromApi(action.payload[0], action.keyword)
      // );

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

const removeDuplicate = (array = []) => {
  const newArray = [...array];
  const uniqueTitle = [];
  const uniqueArray = [];
  for (let i = 0; i < newArray.length; i++) {
    if (!uniqueTitle.includes(newArray[i].city.toLowerCase())) {
      uniqueTitle.push(newArray[i].city.toLowerCase());
      uniqueArray.push(newArray[i]);
    }
  }
  return uniqueArray;
};

export default reducer;
