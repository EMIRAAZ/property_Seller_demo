export const initialState = {
  homeProperty: {
    loading: false,
    error: false,
    property: [],
  },
  homeSearch: {
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
