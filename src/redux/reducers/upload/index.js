import { initialState } from './initialState';
import {
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_ERROR,
  UPLOAD_IMAGE_STARTED,
  CLEAR_UPLOAD,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_IMAGE_STARTED:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case UPLOAD_IMAGE:
      return addToLinkArray(state, action.payload, action.index);
    case UPLOAD_IMAGE_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case CLEAR_UPLOAD:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const addToLinkArray = (state, payload, i) => {
  const linkArray = [...state.link];
  if (i) linkArray[i] = payload;
  else if (payload) linkArray.push(payload);
  return {
    ...state,
    loading: false,
    error: false,
    link: linkArray,
  };
};

export default reducer;
