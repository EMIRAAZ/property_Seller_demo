import { initialState } from './initialState';
import {
  ADD_ADMIN_AGENCY,
  ADD_ADMIN_AGENCY_ERROR,
  ADD_ADMIN_AGENCY_STARTED,
  ADMIN_AGENCY_INPUT_CHANGE,
  EDIT_ADMIN_AGENCY,
  EDIT_ADMIN_AGENCY_ERROR,
  EDIT_ADMIN_AGENCY_STARTED,
  GET_ADMIN_AGENCY_BY_ID,
  GET_ADMIN_AGENCY_BY_ID_ERROR,
  GET_ADMIN_AGENCY_BY_ID_STARTED,
  CLEAR_ADD_AGENCY,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_AGENCY_INPUT_CHANGE:
      return {
        ...state,
        agencyValue: {
          ...state.agencyValue,
          [action.payload.key]: action.payload.value,
        },
      };
    case ADD_ADMIN_AGENCY:
      return {
        ...state,
        env: {
          ...state,
          error: false,
          loading: false,
          success: true,
        },
      };
    case ADD_ADMIN_AGENCY_STARTED:
      return {
        ...state,
        env: {
          ...state,
          error: false,
          loading: true,
          success: true,
        },
      };
    case ADD_ADMIN_AGENCY_ERROR:
      return {
        ...state,
        env: {
          ...state,
          error: true,
          loading: false,
          success: false,
        },
      };
    case EDIT_ADMIN_AGENCY:
      return {
        ...state,
        env: {
          ...state,
          error: false,
          loading: false,
          success: true,
          editing: false,
        },
      };
    case EDIT_ADMIN_AGENCY_STARTED:
      return {
        ...state,
        env: {
          ...state,
          error: false,
          loading: true,
          success: true,
        },
      };
    case EDIT_ADMIN_AGENCY_ERROR:
      return {
        ...state,
        env: {
          ...state,
          error: true,
          loading: false,
          success: false,
        },
      };
    case GET_ADMIN_AGENCY_BY_ID:
      let agencyVal =
        action.payload && action.payload.length && action.payload[0];

      const newAgencyValue = { ...state.agencyValue };
      const createdAgencyValue = {};

      for (const key in agencyVal) {
        if (newAgencyValue.hasOwnProperty(key)) {
          createdAgencyValue[key] = agencyVal[key];
        }
      }

      return {
        ...state,
        agencyValue: {
          ...state.agencyValue,
          ...createdAgencyValue,
        },
      };
    case GET_ADMIN_AGENCY_BY_ID_STARTED:
      return {
        ...state,
      };
    case GET_ADMIN_AGENCY_BY_ID_ERROR:
      return {
        ...state,
      };
    case CLEAR_ADD_AGENCY:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;