import { initialState } from './initialState';
import {
  ADD_ADMIN_OFFPLAN,
  ADD_ADMIN_OFFPLAN_ERROR,
  ADD_ADMIN_OFFPLAN_STARTED,
  ADMIN_OFFPLAN_INPUT_CHANGE,
  GET_AMENITY_OFFPLAN,
  GET_AMENITY_OFFPLAN_ERROR,
  GET_AMENITY_OFFPLAN_STARTED,
  EDIT_ADMIN_OFFPLAN,
  EDIT_ADMIN_OFFPLAN_ERROR,
  EDIT_ADMIN_OFFPLAN_STARTED,
  GET_ADMIN_OFFPLAN_BY_ID,
  GET_ADMIN_OFFPLAN_BY_ID_ERROR,
  GET_ADMIN_OFFPLAN_BY_ID_STARTED,
  CLEAR_ADD_OFFPLAN,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_OFFPLAN_INPUT_CHANGE:
      if (
        action.payload.key === 'paymentPlan' ||
        action.payload.key === 'availability'
      ) {
        return {
          ...state,
          offplanValue: {
            ...state.offplanValue,
            [action.payload.key]: action.payload.value.split(','),
          },
        };
      } else {
        return {
          ...state,
          offplanValue: {
            ...state.offplanValue,
            [action.payload.key]: action.payload.value,
          },
        };
      }
    case ADD_ADMIN_OFFPLAN:
      return {
        ...state,
        env: {
          ...state,
          error: false,
          loading: false,
          success: true,
        },
      };
    case ADD_ADMIN_OFFPLAN_STARTED:
      return {
        ...state,
        env: {
          ...state,
          error: false,
          loading: true,
          success: true,
        },
      };
    case ADD_ADMIN_OFFPLAN_ERROR:
      return {
        ...state,
        env: {
          ...state,
          error: true,
          loading: false,
          success: false,
        },
      };
    case GET_AMENITY_OFFPLAN:
      const amenity = action.payload.rows.map(a => {
        return {
          name: a.name,
          amenityLogo: a.amenityLogo,
          value: a.name,
        };
      });
      return {
        ...state,
        offplanOptions: {
          ...state.offplanOptions,
          amenities: amenity,
        },
      };
    case GET_AMENITY_OFFPLAN_STARTED:
      return {
        ...state,
      };
    case GET_AMENITY_OFFPLAN_ERROR:
      return {
        ...state,
      };
    case EDIT_ADMIN_OFFPLAN:
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
    case EDIT_ADMIN_OFFPLAN_STARTED:
      return {
        ...state,
        env: {
          ...state,
          error: false,
          loading: true,
          success: true,
        },
      };
    case EDIT_ADMIN_OFFPLAN_ERROR:
      return {
        ...state,
        env: {
          ...state,
          error: true,
          loading: false,
          success: false,
        },
      };
    case GET_ADMIN_OFFPLAN_BY_ID:
      let propVal =
        action.payload && action.payload.length && action.payload[0];

      const newOffplanValue = { ...state.offplanValue };
      const createdOffplanValue = {};

      for (const key in propVal) {
        if (newOffplanValue.hasOwnOffplan(key)) {
          createdOffplanValue[key] = propVal[key];
        }
      }
      return {
        ...state,
        offplanValue: {
          ...state.offplanValue,
          ...createdOffplanValue,
        },
      };
    case GET_ADMIN_OFFPLAN_BY_ID_STARTED:
      return {
        ...state,
      };
    case GET_ADMIN_OFFPLAN_BY_ID_ERROR:
      return {
        ...state,
      };
    case CLEAR_ADD_OFFPLAN:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;
