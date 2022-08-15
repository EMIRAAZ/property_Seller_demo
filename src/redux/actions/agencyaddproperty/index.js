import axios from '../../../utils/axios';
import {
  ADD_AGENCY_PROPERTY,
  ADD_AGENCY_PROPERTY_ERROR,
  ADD_AGENCY_PROPERTY_STARTED,
  AGENCY_PROPERTY_INPUT_CHANGE,
  GET_AGENCY_AGENT_PROPERTY,
  GET_AGENCY_AGENT_PROPERTY_ERROR,
  GET_AGENCY_AGENT_PROPERTY_STARTED,
  GET_AGENCY_AMENITY_PROPERTY,
  GET_AGENCY_AMENITY_PROPERTY_ERROR,
  GET_AGENCY_AMENITY_PROPERTY_STARTED,
  EDIT_AGENCY_PROPERTY,
  EDIT_AGENCY_PROPERTY_ERROR,
  EDIT_AGENCY_PROPERTY_STARTED,
  GET_AGENCY_PROPERTY_BY_ID,
  GET_AGENCY_PROPERTY_BY_ID_ERROR,
  GET_AGENCY_PROPERTY_BY_ID_STARTED,
  CLEAR_AGENCY_ADD_PROPERTY,
  GET_AGENCY_NEIGHBORHOOD_PROPERTY,
  GET_AGENCY_NEIGHBORHOOD_PROPERTY_STARTED,
  GET_AGENCY_NEIGHBORHOOD_PROPERTY_ERROR,
  GET_AGENCY_TAGLINE_PROPERTY,
  GET_AGENCY_TAGLINE_PROPERTY_STARTED,
  GET_AGENCY_TAGLINE_PROPERTY_ERROR,
} from '../../constants';

export const changeAgencyPropertyInput = payload => {
  return {
    type: AGENCY_PROPERTY_INPUT_CHANGE,
    payload: payload,
  };
};

const addAgencyPropertyStarted = () => {
  return {
    type: ADD_AGENCY_PROPERTY_STARTED,
  };
};

const addAgencyPropertyError = () => {
  return {
    type: ADD_AGENCY_PROPERTY_ERROR,
  };
};

export const addAgencyProperty = (property, cb) => async dispatch => {
  try {
    dispatch(addAgencyPropertyStarted());
    const res = await axios.post(`/api/property`, property, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    cb();
    dispatch({
      type: ADD_AGENCY_PROPERTY,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(addAgencyPropertyError());
  }
};

const getAgentPropertyStarted = () => {
  return {
    type: GET_AGENCY_AGENT_PROPERTY_STARTED,
  };
};

const getAgentPropertyError = () => {
  return {
    type: GET_AGENCY_AGENT_PROPERTY_ERROR,
  };
};

export const getAgencyAgentProperty = () => async dispatch => {
  try {
    dispatch(getAgentPropertyStarted());
    const res = await axios.get(
      `/api/agent/agency/${localStorage.getItem('agency_id')}`,
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('authToken'),
        },
      }
    );
    dispatch({
      type: GET_AGENCY_AGENT_PROPERTY,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getAgentPropertyError());
  }
};

const getAmenityPropertyStarted = () => {
  return {
    type: GET_AGENCY_AMENITY_PROPERTY_STARTED,
  };
};

const getAmenityPropertyError = () => {
  return {
    type: GET_AGENCY_AMENITY_PROPERTY_ERROR,
  };
};

export const getAgencyAmenityProperty = () => async dispatch => {
  try {
    dispatch(getAmenityPropertyStarted());
    const res = await axios.get(`/api/amenity`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_AGENCY_AMENITY_PROPERTY,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getAmenityPropertyError());
  }
};

// edit property

const editAgencyPropertyStarted = () => {
  return {
    type: EDIT_AGENCY_PROPERTY_STARTED,
  };
};

const editAgencyPropertyError = () => {
  return {
    type: EDIT_AGENCY_PROPERTY_ERROR,
  };
};

export const editAgencyProperty = (id, property, cb) => async dispatch => {
  try {
    dispatch(editAgencyPropertyStarted());
    const res = await axios.patch(`/api/property/${id}`, property, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    cb();
    dispatch({
      type: EDIT_AGENCY_PROPERTY,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(editAgencyPropertyError());
  }
};

// edit property

// get property by Id

const getAgencyPropertyByIdStarted = () => {
  return {
    type: GET_AGENCY_PROPERTY_BY_ID_STARTED,
  };
};

const getAgencyPropertyByIdError = () => {
  return {
    type: GET_AGENCY_PROPERTY_BY_ID_ERROR,
  };
};

export const getAgencyPropertyById = id => async dispatch => {
  try {
    dispatch(getAgencyPropertyByIdStarted());
    const res = await axios.get(`/api/property/${id}`);
    dispatch({
      type: GET_AGENCY_PROPERTY_BY_ID,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getAgencyPropertyByIdError());
  }
};

// get property by Id

// clear add property

export const clearAgencyAddProperty = () => {
  return {
    type: CLEAR_AGENCY_ADD_PROPERTY,
  };
};

// neighborhood

const getNeighborhoodPropertyStarted = () => {
  return {
    type: GET_AGENCY_NEIGHBORHOOD_PROPERTY_STARTED,
  };
};

const getNeighborhoodPropertyError = () => {
  return {
    type: GET_AGENCY_NEIGHBORHOOD_PROPERTY_ERROR,
  };
};

export const getAgencyNeighborhoodProperty = () => async dispatch => {
  try {
    dispatch(getNeighborhoodPropertyStarted());
    const res = await axios.get(`/api/famousneighborhood`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_AGENCY_NEIGHBORHOOD_PROPERTY,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getNeighborhoodPropertyError());
  }
};

// tagline

const getTaglinePropertyStarted = () => {
  return {
    type: GET_AGENCY_TAGLINE_PROPERTY_STARTED,
  };
};

const getTaglinePropertyError = () => {
  return {
    type: GET_AGENCY_TAGLINE_PROPERTY_ERROR,
  };
};

export const getAgencyTaglineProperty = () => async dispatch => {
  try {
    dispatch(getTaglinePropertyStarted());
    const res = await axios.get(`/api/tagline`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_AGENCY_TAGLINE_PROPERTY,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getTaglinePropertyError());
  }
};
