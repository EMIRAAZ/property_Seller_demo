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
    noOfBed: '',
    noOfBath: '',
    locationSearch: {
      loading: false,
      error: false,
      location: [],
    },
  },
};
