export const initialState = {
  env: {
    error: false,
    loading: false,
    success: false,
    editing: false,
  },
  agencyValue: {
    agencyName: '',
    username: '',
    password: '',
    agencyLogo: '',
    tradeLicenseNo: '',
    brn: '',
    website: '',
    email: '',
    phoneNumber: '',
    officeAddress: '',
    ownerName: '',
  },
  agentValue: {
    error: false,
    loading: false,
    success: false,
    agent: [],
  },
};
