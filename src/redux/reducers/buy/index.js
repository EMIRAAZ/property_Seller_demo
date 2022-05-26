import { initialState } from './initialState';
import {
  GET_BUY_PROPERTY,
  GET_BUY_PROPERTY_ERROR,
  GET_BUY_PROPERTY_STARTED,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BUY_PROPERTY:
      return {
        ...state,
        buyProperty: {
          ...state.buyProperty,
          error: false,
          loading: false,
          property: action.payload.rows,
          count: action.payload.count,
        },
      };
    case GET_BUY_PROPERTY_STARTED:
      return {
        ...state,
        buyProperty: {
          ...state.buyProperty,
          error: false,
          loading: true,
        },
      };
    case GET_BUY_PROPERTY_ERROR:
      return {
        ...state,
        buyProperty: {
          ...state.buyProperty,
          error: true,
          loading: false,
        },
      };
    default:
      return state;
  }
};

export default reducer;
