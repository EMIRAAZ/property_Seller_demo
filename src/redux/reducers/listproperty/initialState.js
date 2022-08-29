export const initialState = {
  loading: false,
  error: false,
  featured: { loading: false, error: false, data: [], count: 0 },
  readyToMoveIn: { loading: false, error: false, data: [], count: 0 },
  propWithNeighbor: { loading: false, error: false, data: [], count: 0 },
  vp: { loading: false, error: false, data: [], count: 0 },
  tag: { loading: false, error: false, data: [], count: 0 },
  listSearch: {
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
