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
  homeFeatured: { loading: false, error: false, featured: [] },
  homeLuxury: { loading: false, error: false, luxury: [] },
};
