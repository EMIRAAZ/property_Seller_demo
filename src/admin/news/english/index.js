import { connect } from 'react-redux';
import News from './News';
import {
  getNewsAdmin,
  changeAdminNewsInput,
  addAdminNews,
  getByIdAdminNews,
  editAdminNews,
  clearAddNews,
  deleteAdminNews,
  getTopicsNews,
  clearUpload,
  deleteNewsImage,
  addNewsImage,
} from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    adminNews: state.newsReducer,
    taghead: state.newsReducer.taghead,
    newsValue: state.newsReducer.newsValue,
    topics: state.newsReducer.topics,
    env: state.newsReducer.env,
    images: state.uploadReducer.link,
    imgLoading: state.uploadReducer.loading,
    imgError: state.uploadReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNewsAdmin: params => dispatch(getNewsAdmin(params)),
    changeAdminNewsInput: payload => dispatch(changeAdminNewsInput(payload)),
    addAdminNews: (news, cb) => dispatch(addAdminNews(news, cb)),
    editAdminNews: (id, news, cb) => dispatch(editAdminNews(id, news, cb)),
    getByIdAdminNews: id => dispatch(getByIdAdminNews(id)),
    deleteAdminNews: (id, cb) => dispatch(deleteAdminNews(id, cb)),
    clearAddNews: () => dispatch(clearAddNews()),
    getTopicsNews: () => dispatch(getTopicsNews()),
    clearUpload: () => dispatch(clearUpload()),
    addNewsImage: payload => dispatch(addNewsImage(payload)),
    deleteNewsImage: payload => dispatch(deleteNewsImage(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
