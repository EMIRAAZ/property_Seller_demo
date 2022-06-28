import { connect } from 'react-redux';
import TagLine from './TagLine';
import {
  getTagLineAdmin,
  changeAdminTagLineInput,
  addAdminTagLine,
  getByIdAdminTagLine,
  editAdminTagLine,
  clearAddTagLine,
  deleteAdminTagLine,
  getTagHeadTagLine,
} from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    adminTagLine: state.taglineReducer,
    taghead: state.taglineReducer.taghead,
    taglineValue: state.taglineReducer.taglineValue,
    env: state.taglineReducer.env,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTagLineAdmin: params => dispatch(getTagLineAdmin(params)),
    changeAdminTagLineInput: payload =>
      dispatch(changeAdminTagLineInput(payload)),
    addAdminTagLine: (tagline, cb) => dispatch(addAdminTagLine(tagline, cb)),
    editAdminTagLine: (id, tagline, cb) =>
      dispatch(editAdminTagLine(id, tagline, cb)),
    getByIdAdminTagLine: id => dispatch(getByIdAdminTagLine(id)),
    deleteAdminTagLine: (id, cb) => dispatch(deleteAdminTagLine(id, cb)),
    clearAddTagLine: () => dispatch(clearAddTagLine()),
    getTagHeadTagLine: () => dispatch(getTagHeadTagLine()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TagLine);
