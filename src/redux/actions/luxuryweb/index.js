import axios from '../../../utils/axios';
import {
  GET_LUXURY_VILLA,
  GET_LUXURY_VILLA_STARTED,
  GET_LUXURY_VILLA_ERROR,
  GET_LUXURY_APPARTMENT,
  GET_LUXURY_APPARTMENT_STARTED,
  GET_LUXURY_APPARTMENT_ERROR,
  GET_LUXURY_TOWNHOUSE,
  GET_LUXURY_TOWNHOUSE_STARTED,
  GET_LUXURY_TOWNHOUSE_ERROR,
  GET_LUXURY_PENTHOUSE,
  GET_LUXURY_PENTHOUSE_STARTED,
  GET_LUXURY_PENTHOUSE_ERROR,
  GET_LUXURY_WITH_PROPERTYTYPE_STARTED,
  GET_LUXURY_WITH_PROPERTYTYPE,
  GET_LUXURY_WITH_PROPERTYTYPE_ERROR,
} from '../../constants';

// villa

const getLuxuryVillaStarted = () => {
  return {
    type: GET_LUXURY_VILLA_STARTED,
  };
};

const getLuxuryError = () => {
  return {
    type: GET_LUXURY_VILLA_ERROR,
  };
};

export const getLuxuryVillaWeb = () => async dispatch => {
  try {
    dispatch(getLuxuryVillaStarted());
    const res = await axios.get(`/api/property?propertyType=Villa&limit=4`);
    dispatch({
      type: GET_LUXURY_VILLA,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getLuxuryError());
  }
};

// appartment

const getLuxuryAppartmentStarted = () => {
  return {
    type: GET_LUXURY_APPARTMENT_STARTED,
  };
};

const getLuxuryAppartmentError = () => {
  return {
    type: GET_LUXURY_APPARTMENT_ERROR,
  };
};

export const getLuxuryAppartmentWeb = () => async dispatch => {
  try {
    dispatch(getLuxuryAppartmentStarted());
    const res = await axios.get(`/api/property?propertyType=Apartment&limit=4`);
    dispatch({
      type: GET_LUXURY_APPARTMENT,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getLuxuryAppartmentError());
  }
};

// townhouse

const getLuxuryTownhouseStarted = () => {
  return {
    type: GET_LUXURY_TOWNHOUSE_STARTED,
  };
};

const getLuxuryTownhouseError = () => {
  return {
    type: GET_LUXURY_TOWNHOUSE_ERROR,
  };
};

export const getLuxuryTownhouseWeb = () => async dispatch => {
  try {
    dispatch(getLuxuryTownhouseStarted());
    const res = await axios.get(`/api/property?propertyType=Townhouse&limit=4`);
    dispatch({
      type: GET_LUXURY_TOWNHOUSE,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getLuxuryTownhouseError());
  }
};

// penthouse

const getLuxuryPenthouseStarted = () => {
  return {
    type: GET_LUXURY_PENTHOUSE_STARTED,
  };
};

const getLuxuryPenthouseError = () => {
  return {
    type: GET_LUXURY_PENTHOUSE_ERROR,
  };
};

export const getLuxuryPenthouseWeb = () => async dispatch => {
  try {
    dispatch(getLuxuryPenthouseStarted());
    const res = await axios.get(`/api/property?propertyType=Penthouse&limit=4`);
    dispatch({
      type: GET_LUXURY_PENTHOUSE,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getLuxuryPenthouseError());
  }
};

const getLuxuryWithTypeStarted = () => {
  return {
    type: GET_LUXURY_WITH_PROPERTYTYPE_STARTED,
  };
};

const getLuxuryWithTypeError = () => {
  return {
    type: GET_LUXURY_WITH_PROPERTYTYPE_ERROR,
  };
};

export const getLuxuryWithTypeWeb =
  (propertyType, offset = 0) =>
  async dispatch => {
    try {
      dispatch(getLuxuryWithTypeStarted());
      const res = await axios.get(
        `/api/property?propertyType=${propertyType}&limit=10&offset=${offset}`
      );
      dispatch({
        type: GET_LUXURY_WITH_PROPERTYTYPE,
        payload: res.data?.data,
      });
    } catch (e) {
      dispatch(getLuxuryWithTypeError());
    }
  };
