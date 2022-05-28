import { initialState } from './initialState';
import { ADMIN_PROPERTY_INPUT_CHANGE } from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_PROPERTY_INPUT_CHANGE:
      return {
        ...state,
        loading: true,
        property: {
          ...state.property,
          [action.payload.key]: action.payload.value,
        },
      };
    default:
      return state;
  }
};

export default reducer;
