export const initialState = {
  homeProperty: {
    loading: false,
    error: false,
    property: [],
    currentPage: 1,
    params: '',
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
  homeFeatured: {
    loading: false,
    error: false,
    featured: [],
    currentPage: 1,
    count: 0,
  },
  homeLuxury: { loading: false, error: false, luxury: [], currentPage: 0 },
};
