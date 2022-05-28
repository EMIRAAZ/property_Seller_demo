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
      return addToLinkArray(state, action.payload);
    case UPLOAD_IMAGE_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

const addToLinkArray = (state, payload) => {
  const linkArray = [...state.link];
  if (payload) linkArray.push(payload);
  return {
    ...state,
    loading: false,
    error: false,
    link: linkArray,
  };
};

export default reducer;
