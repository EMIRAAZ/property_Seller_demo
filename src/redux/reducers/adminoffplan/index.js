import { initialState } from './initialState';
import {
  GET_ADMIN_OFFPLAN,
  GET_ADMIN_OFFPLAN_ERROR,
  GET_ADMIN_OFFPLAN_STARTED,
  DELETE_ADMIN_OFFPLAN,
  DELETE_ADMIN_OFFPLAN_ERROR,
  DELETE_ADMIN_OFFPLAN_STARTED,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADMIN_OFFPLAN:
      return {
        ...state,
        adminOffplan: {
          ...state.adminOffplan,
          error: false,
          loading: false,
          offplan: action.payload.rows,
          count: action.payload.count,
        },
      };
    case GET_ADMIN_OFFPLAN_STARTED:
      return {
        ...state,
        adminOffplan: {
          ...state.adminOffplan,
          error: false,
          loading: true,
        },
      };
    case GET_ADMIN_OFFPLAN_ERROR:
      return {
        ...state,
        adminOffplan: {
          ...state.adminOffplan,
          error: true,
          loading: false,
        },
      };
    case DELETE_ADMIN_OFFPLAN:
      return {
        ...state,
      };
    case DELETE_ADMIN_OFFPLAN_STARTED:
      return {
        ...state,
      };
    case DELETE_ADMIN_OFFPLAN_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
