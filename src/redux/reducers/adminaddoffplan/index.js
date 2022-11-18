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
  ADMIN_OFFPLAN_MULTIPLE_INPUT_CHANGE,
  DELETE_MULTIPLE_ADMIN_OFFPLAN,
  ADD_NEW_BOX_OFFPLAN,
  GET_AGENT_OFFPLAN,
  GET_AGENT_OFFPLAN_ERROR,
  GET_AGENT_OFFPLAN_STARTED,
  ADD_IMAGES_OFFPLAN,
  ADD_IMAGES_OFFPLAN_STARTED,
  ADD_IMAGES_OFFPLAN_ERROR,
  DELETE_IMAGES_OFFPLAN,
  DELETE_IMAGES_OFFPLAN_STARTED,
  DELETE_IMAGES_OFFPLAN_ERROR,
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
    case ADMIN_OFFPLAN_MULTIPLE_INPUT_CHANGE:
      return {
        ...state,
        offplanValue: {
          ...state.offplanValue,
          [action.mainKey]: changeValueFromArray(
            state.offplanValue[action.mainKey],
            action.key,
            action.value,
            action.position
          ),
        },
      };
    case DELETE_MULTIPLE_ADMIN_OFFPLAN:
      return {
        ...state,
        offplanValue: {
          ...state.offplanValue,
          [action.mainKey]: deleteValueFromArray(
            state.offplanValue[action.mainKey],
            action.position
          ),
        },
      };
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
    case GET_AGENT_OFFPLAN:
      const agent = action.payload.map(a => {
        return {
          name: a.username,
          value: a.id,
        };
      });
      return {
        ...state,
        offplanOptions: {
          ...state.offplanOptions,
          agent: agent,
        },
      };
    case GET_AGENT_OFFPLAN_STARTED:
      return {
        ...state,
      };
    case GET_AGENT_OFFPLAN_ERROR:
      return {
        ...state,
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
    case ADD_NEW_BOX_OFFPLAN:
      return {
        ...state,
        offplanValue: {
          ...state.offplanValue,
          [action.mainKey]: addNewToArray(
            state.offplanValue[action.mainKey],
            action.value
          ),
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
        if (newOffplanValue.hasOwnProperty(key)) {
          createdOffplanValue[key] = propVal[key];
        }
      }
      createdOffplanValue.building = propVal.address.building
        ? propVal.address.building
        : '';
      createdOffplanValue.emirate = propVal.address.emirate
        ? propVal.address.emirate
        : '';

      createdOffplanValue.placeAddress = propVal.address.placeAddress
        ? propVal.address.placeAddress
        : '';
      createdOffplanValue.city = propVal.address.city
        ? propVal.address.city
        : '';
      createdOffplanValue.price = propVal.price ? propVal.price.join(' ') : '';
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
    case ADD_IMAGES_OFFPLAN:
      return {
        ...state,
        offplanValue: {
          ...state.offplanValue,
          images: [...state.offplanValue.images, action.payload],
        },
      };
    case ADD_IMAGES_OFFPLAN_STARTED:
      return {
        ...state,
        env: {
          ...state.env,
          images: {
            error: false,
            loading: true,
          },
        },
      };
    case ADD_IMAGES_OFFPLAN_ERROR:
      return {
        ...state,
        env: {
          ...state.env,
          images: {
            error: true,
            loading: false,
          },
        },
      };
    case DELETE_IMAGES_OFFPLAN:
      const imageArray = [...state.offplanValue.images];
      const index = imageArray.indexOf(action.payload);
      imageArray.splice(index, 1);
      return {
        ...state,
        offplanValue: {
          ...state.offplanValue,
          images: [...imageArray],
        },
      };
    case DELETE_IMAGES_OFFPLAN_STARTED:
      return {
        ...state,
        env: {
          ...state.env,
          images: {
            error: false,
            loading: true,
          },
        },
      };
    case DELETE_IMAGES_OFFPLAN_ERROR:
      return {
        ...state,
        env: {
          ...state.env,
          images: {
            error: true,
            loading: false,
          },
        },
      };
    default:
      return state;
  }
};

const changeValueFromArray = (arr, key, value, position) => {
  const newArr = [...arr];
  const val = newArr[position];
  const changedObject = { ...val, [key]: value };
  newArr[position] = changedObject;
  return newArr;
};

export default reducer;

const deleteValueFromArray = (arr, position) => {
  const newArr = [...arr];
  newArr.splice(position, 1);
  return newArr;
};

const addNewToArray = (arr, obj) => {
  const newArr = [...arr];
  return [obj].concat(newArr);
};
