export const initialState = {
  env: {
    error: false,
    loading: false,
    success: false,
    editing: false,
  },
  offplanValue: {
    title: '',
    description: '',
    placeAddress: '',
    building: '',
    city: '',
    emirate: '',
    images: [],
    amenities: [],
    availability: [],
    paymentPlan: [],
    brochurePDF: [],
  },
  offplanOptions: {
    amenities: [],
    emirate: [
      { name: 'Abu Dhabi', value: 'Abu Dhabi' },
      { name: 'Dubai', value: 'Dubai' },
      { name: 'Sharjah', value: 'Sharjah' },
      { name: 'Ajman', value: 'Ajman' },
      { name: 'Umm Al Quwain', value: 'Umm Al Quwain' },
      { name: 'Ras Al Khaimah', value: 'Ras Al Khaimah' },
      { name: 'Fujairah', value: 'Fujairah' },
    ],
  },
};
