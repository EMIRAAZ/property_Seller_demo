import axios from '../../../utils/axios';
import {
  GET_SINGLE_NEWS_WEB,
  GET_SINGLE_NEWS_WEB_STARTED,
  GET_SINGLE_NEWS_WEB_ERROR,
} from '../../constants';

const getSingleNewsStarted = () => {
  return {
    type: GET_SINGLE_NEWS_WEB_STARTED,
  };
};

const getSingleNewsError = () => {
  return {
    type: GET_SINGLE_NEWS_WEB_ERROR,
  };
};

export const getSingleNews = id => async dispatch => {
  try {
    dispatch(getSingleNewsStarted());
    const res = await axios.get(`/api/news/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_SINGLE_NEWS_WEB,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getSingleNewsError());
  }
};
