export const initialState = {
  buyProperty: {
    loading: false,
    error: false,
    property: [],
  },
  params: '',
  paramInput: {
    propertyType: '',
    sale: '',
    priceFrom: '',
    priceTo: '',
    location: '',
  },
  locationSearch: {
    loading: false,
    error: false,
    location: [],
  },
};
