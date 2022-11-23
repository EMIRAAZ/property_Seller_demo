export const initialState = {
  homeProperty: {
    loading: false,
    error: false,
    property: [],
  },
  homeSearch: {
    location: '',
    emirate: '',
    propertyType: '',
    priceFrom: '',
    priceTo: '',
    noOfBed: '',
    noOfBath: '',
    amenities: '',
    searchArray: [],
    locationSearch: {
      loading: false,
      error: false,
      location: [],
    },
  },
};
