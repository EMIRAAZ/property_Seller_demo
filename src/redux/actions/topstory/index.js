import axios from '../../../utils/axios';
import {
  GET_TOPSTORY_WEB,
  GET_TOPSTORY_WEB_STARTED,
  GET_TOPSTORY_WEB_ERROR,
  GET_TOPSTORY_TOPICS_WEB,
  GET_TOPSTORY_TOPICS_WEB_STARTED,
  GET_TOPSTORY_TOPICS_WEB_ERROR,
} from '../../constants';

const getTopStoryStarted = () => {
  return {
    type: GET_TOPSTORY_WEB_STARTED,
  };
};

const getTopStoryError = () => {
  return {
    type: GET_TOPSTORY_WEB_ERROR,
  };
};

export const getTopStory =
  (params = '') =>
  async dispatch => {
    try {
      dispatch(getTopStoryStarted());
      const res = await axios.get(`/api/news?${params}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('authToken'),
        },
      });
      dispatch({
        type: GET_TOPSTORY_WEB,
        payload: res.data?.data,
      });
    } catch (e) {
      dispatch(getTopStoryError());
    }
  };

const getTopStoryTopicsStarted = () => {
  return {
    type: GET_TOPSTORY_TOPICS_WEB_STARTED,
  };
};

const getTopStoryTopicsError = () => {
  return {
    type: GET_TOPSTORY_TOPICS_WEB_ERROR,
  };
};

export const getTopStoryTopics = () => async dispatch => {
  try {
    dispatch(getTopStoryTopicsStarted());
    const res = await axios.get(`/api/newstopics`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    dispatch({
      type: GET_TOPSTORY_TOPICS_WEB,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(getTopStoryTopicsError());
  }
};
