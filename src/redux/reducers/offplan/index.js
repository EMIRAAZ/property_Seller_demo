import { initialState } from './initialState';
import {
  GET_OFFPLAN_WEB,
  GET_OFFPLAN_WEB_STARTED,
  GET_OFFPLAN_WEB_ERROR,
  GET_OFFPLAN_BY_ID,
  GET_OFFPLAN_BY_ID_STARTED,
  GET_OFFPLAN_BY_ID_ERROR,
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
    case GET_OFFPLAN_BY_ID:
      return {
        ...state,
        singleOffplan: {
          ...state.singleOffplan,
          error: false,
          loading: false,
          offplan: action.payload,
        },
      };
    case GET_OFFPLAN_BY_ID_STARTED:
      return {
        ...state,
        singleOffplan: {
          ...state.singleOffplan,
          error: false,
          loading: true,
        },
      };
    case GET_OFFPLAN_BY_ID_ERROR:
      return {
        ...state,
        singleOffplan: {
          ...state.singleOffplan,
          error: true,
          loading: false,
        },
      };
    default:
      return state;
  }
};

export default reducer;
