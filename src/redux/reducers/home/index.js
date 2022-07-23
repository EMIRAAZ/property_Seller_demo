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
          property: [
            ...addIfNecessary(state.homeProperty.property, action.payload.rows),
          ],
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
      return {
        ...state,
        homeSearch: {
          ...state.homeSearch,
          locationSearch: {
            ...state.homeSearch.locationSearch,
            error: false,
            loading: false,
            location: action.payload && removeDuplicate(action.payload[0]),
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

const addIfNecessary = (addTo, add) => {
  console.log(addTo, add.length);
  let mainArray = [...addTo, ...add];
  // for (let i = 0; i < add.length; i++) {
  //   // console.log('loop');
  //   // let filterArray = mainArray.filter(i => i.id === add[i].id);
  //   // console.log(filterArray);
  //   // if (!filterArray.length) {
  //   //   console.log('pushing', add[i]);
  //   //   // mainArray.push(add[i]);
  //   //   console.log(mainArray);
  //   // }
  //   mainArray.push(add);
  // }

  return mainArray;
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
