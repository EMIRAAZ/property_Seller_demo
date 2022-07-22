import { initialState } from './initialState';
import {
  GET_RENT_PROPERTY,
  GET_RENT_PROPERTY_ERROR,
  GET_RENT_PROPERTY_STARTED,
  ON_CHANGE_RENT_PROPERTY_INPUT,
  GET_RENT_LOCATION_SEARCH_STARTED,
  GET_RENT_LOCATION_SEARCH_ERROR,
  GET_RENT_LOCATION_SEARCH,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_CHANGE_RENT_PROPERTY_INPUT:
      return {
        ...state,
        cardInput: {
          ...state.cardInput,
          [action.payload.key]: action.payload.value,
        },
      };
    case GET_RENT_PROPERTY:
      return {
        ...state,
        rentProperty: {
          ...state.rentProperty,
          error: false,
          loading: false,
          property: action.payload.rows,
          count: action.payload.count,
        },
      };
    case GET_RENT_PROPERTY_STARTED:
      return {
        ...state,
        rentProperty: {
          ...state.rentProperty,
          error: false,
          loading: true,
        },
      };
    case GET_RENT_PROPERTY_ERROR:
      return {
        ...state,
        rentProperty: {
          ...state.rentProperty,
          error: true,
          loading: false,
        },
      };
    case GET_RENT_LOCATION_SEARCH:
      return {
        ...state,
        cardInput: {
          ...state.cardInput,
          locationSearch: {
            ...state.cardInput.locationSearch,
            error: false,
            loading: false,
            location: action.payload && removeDuplicate(action.payload[0]),
          },
        },
      };
    case GET_RENT_LOCATION_SEARCH_STARTED:
      return {
        ...state,
        cardInput: {
          ...state.cardInput,
          locationSearch: {
            ...state.cardInput.locationSearch,
            error: false,
            loading: true,
          },
        },
      };
    case GET_RENT_LOCATION_SEARCH_ERROR:
      return {
        ...state,
        cardInput: {
          ...state.cardInput,
          locationSearch: {
            ...state.cardInput.locationSearch,
            error: true,
            loading: false,
          },
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
