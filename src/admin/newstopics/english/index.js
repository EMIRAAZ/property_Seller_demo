import { connect } from 'react-redux';
import NewsTopics from './NewsTopics';
import {
  getNewsTopicsAdmin,
  changeAdminNewsTopicsInput,
  addAdminNewsTopics,
  getByIdAdminNewsTopics,
  editAdminNewsTopics,
  clearAddNewsTopics,
  deleteAdminNewsTopics,
} from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    adminNewsTopics: state.newstopicsReducer,
    newstopicsValue: state.newstopicsReducer.newstopicsValue,
    env: state.newstopicsReducer.env,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNewsTopicsAdmin: params => dispatch(getNewsTopicsAdmin(params)),
    changeAdminNewsTopicsInput: payload =>
      dispatch(changeAdminNewsTopicsInput(payload)),
    addAdminNewsTopics: (newstopics, cb) =>
      dispatch(addAdminNewsTopics(newstopics, cb)),
    editAdminNewsTopics: (id, newstopics, cb) =>
      dispatch(editAdminNewsTopics(id, newstopics, cb)),
    getByIdAdminNewsTopics: id => dispatch(getByIdAdminNewsTopics(id)),
    deleteAdminNewsTopics: (id, cb) => dispatch(deleteAdminNewsTopics(id, cb)),
    clearAddNewsTopics: () => dispatch(clearAddNewsTopics()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsTopics);
