import { initialState } from './initialState';
import {
  GET_HOME_PROPERTY,
  GET_HOME_PROPERTY_ERROR,
  GET_HOME_PROPERTY_STARTED,
  HOME_SEARCH_INPUT_CHANGE,
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

    default:
      return state;
  }
};

export default reducer;
