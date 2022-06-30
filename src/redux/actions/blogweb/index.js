import axios from '../../../utils/axios';
import {
  GET_BLOG_WEB,
  GET_BLOG_WEB_STARTED,
  GET_BLOG_WEB_ERROR,
} from '../../constants';

const getBlogWebStarted = () => {
  return {
    type: GET_BLOG_WEB_STARTED,
  };
};

const getBlogWebError = () => {
  return {
    type: GET_BLOG_WEB_ERROR,
  };
};

export const getBlogWeb =
  (params = '') =>
  async dispatch => {
    try {
      dispatch(getBlogWebStarted());
      const res = await axios.get(`/api/blog?${params}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('authToken'),
        },
      });
      dispatch({
        type: GET_BLOG_WEB,
        payload: res.data?.data,
      });
    } catch (e) {
      dispatch(getBlogWebError());
    }
  };
