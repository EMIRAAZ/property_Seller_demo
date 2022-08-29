import { initialState } from './initialState';
import {
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_ERROR,
  UPLOAD_IMAGE_STARTED,
  CLEAR_UPLOAD,
  REMOVE_IMAGE,
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
    case REMOVE_IMAGE:
      return {
        ...state,
        link: removeFromArray(state.link, action.payload),
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

const removeFromArray = (arr, rElement) => {
  const index = arr.indexOf(rElement);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
};

export default reducer;
