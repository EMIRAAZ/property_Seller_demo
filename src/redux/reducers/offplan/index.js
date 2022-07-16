import { initialState } from './initialState';
import {
  GET_OFFPLAN_WEB,
  GET_OFFPLAN_WEB_STARTED,
  GET_OFFPLAN_WEB_ERROR,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_OFFPLAN_WEB:
      return {
        ...state,
        offplan: {
          ...state.offplan,
          error: false,
          loading: false,
          data: action.payload.rows,
          count: action.payload.count,
        },
      };
    case GET_OFFPLAN_WEB_STARTED:
      return {
        ...state,
        offplan: {
          ...state.offplan,
          error: false,
          loading: true,
        },
      };
    case GET_OFFPLAN_WEB_ERROR:
      return {
        ...state,
        offplan: {
          ...state.offplan,
          error: true,
          loading: false,
        },
      };
    default:
      return state;
  }
};

export default reducer;
