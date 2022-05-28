export const initialState = {
  addAdmin: {
    error: false,
    loading: false,
  },

  property: {
    title: '',
    description: '',
    images: [],
    price: 0.0,
    propertyType: '',
    propertySize: 0,
    propertySizeUnit: '',
    propertyAge: 0.0,
    noOfBedroom: 0,
    noOfBathroom: 0,
    amenities: [],
    referenceNo: '',
    trakheesiPermit: '',
    ownership: '',
    brokerORN: '',
    agentBRN: '',
    call: '',
    email: '',
    whatsapp: '',
    featured: false,
    luxury: false,
    for: '',
    placeAddress: '',
    building: '',
    city: '',
    agentId: '',
    noOfSave: 0,
    noOfShare: 0,
    noOfReport: 0,
  },
  propertyType: [
    { name: 'Apartment', value: 'Apartment' },
    { name: 'Villa', value: 'Villa' },
    { name: 'Townhouse', value: 'Townhouse' },
    { name: 'Penthouse', value: 'Penthouse' },
    { name: 'Compound', value: 'Compound' },
    { name: 'Duplex', value: 'Duplex' },
    { name: 'Full Floor', value: 'Full Floor' },
    { name: 'Half Floor', value: 'Half Floor' },
    { name: 'Whole Building', value: 'Whole Building' },
    { name: 'Land', value: 'Land' },
    { name: 'Bulk Sale Unit', value: 'Bulk Sale Unit' },
    { name: 'Bungalow', value: 'Bungalow' },
    { name: 'Hotel & Hotel Apartment', value: 'Hotel & Hotel Apartment' },
  ],
  sale: [
    { name: 'Buy', value: 'buy' },
    { name: 'Rent', value: 'rent' },
    { name: 'Both', value: 'both' },
  ],
  agent: [],
};
