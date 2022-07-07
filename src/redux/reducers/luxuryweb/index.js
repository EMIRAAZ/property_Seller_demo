import { initialState } from './initialState';
import {
  GET_LUXURY_VILLA,
  GET_LUXURY_VILLA_STARTED,
  GET_LUXURY_VILLA_ERROR,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LUXURY_VILLA:
      return {
        ...state,
        villa: {
          ...state.villa,
          loading: false,
          error: false,
          data: action.payload.rows,
        },
      };
    case GET_LUXURY_VILLA_STARTED:
      return {
        ...state,
        villa: {
          ...state.villa,
          loading: true,
          error: false,
        },
      };
    case GET_LUXURY_VILLA_ERROR:
      return {
        ...state,
        villa: {
          ...state.villa,
          loading: false,
          error: true,
        },
      };
    default:
      return state;
  }
};

export default reducer;
