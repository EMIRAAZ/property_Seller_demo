export const initialState = {
  loading: false,
  error: false,
  featured: [],
  readyToMoveIn: [],
  listSearch: {
    location: '',
    propertyType: '',
    sale: '',
    priceFrom: '',
    priceTo: '',
    locationSearch: {
      loading: false,
      error: false,
      location: [],
    },
  },
};
