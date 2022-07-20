import { initialState } from './initialState';
import {
  GET_HOME_PROPERTY,
  GET_HOME_PROPERTY_ERROR,
  GET_HOME_PROPERTY_STARTED,
  HOME_SEARCH_INPUT_CHANGE,
  GET_HOME_LOCATION_SEARCH,
  GET_HOME_LOCATION_SEARCH_ERROR,
  GET_HOME_LOCATION_SEARCH_STARTED,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

const addIfNecessary = (addTo, add) => {
  let mainArray = [...addTo];
  for (let i = 0; i < add.length; i++) {
    const filterArray = mainArray.filter(i => i.id === add[i].id);
    if (!filterArray.length) {
      addTo.push(add[i]);
    }
  }

  return addTo;
};

export default reducer;
