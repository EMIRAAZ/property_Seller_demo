export const initialState = {
  rentProperty: {
    loading: false,
    error: false,
    property: [],
  },
  cardInput: {
    location: '',
    propertyType: '',
    sale: '',
    priceFrom: '',
    priceTo: '',
    noOfBed: '',
    noOfBath: '',
    searchArray: [],
    locationSearch: {
      loading: false,
      error: false,
      location: [],
    },
  },
};
