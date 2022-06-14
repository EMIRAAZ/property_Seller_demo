import { initialState } from "./initialState";
import {
  GET_PROPERTY_BY_ID,
  GET_PROPERTY_BY_ID_ERROR,
  GET_PROPERTY_BY_ID_STARTED,
} from "../../constants";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROPERTY_BY_ID:
      return {
        ...state,
        error: false,
        loading: false,
        property: action.payload,
      };
    case GET_PROPERTY_BY_ID_STARTED:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case GET_PROPERTY_BY_ID_ERROR:
      return {
        ...state,
        error: false,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
