import { connect } from 'react-redux';
import TagHead from './TagHead';
import {
  getTagHeadAdmin,
  changeAdminTagHeadInput,
  addAdminTagHead,
  getByIdAdminTagHead,
  editAdminTagHead,
  clearAddTagHead,
  deleteAdminTagHead,
} from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    adminTagHead: state.tagheadReducer,
    tagheadValue: state.tagheadReducer.tagheadValue,
    env: state.tagheadReducer.env,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTagHeadAdmin: params => dispatch(getTagHeadAdmin(params)),
    changeAdminTagHeadInput: payload =>
      dispatch(changeAdminTagHeadInput(payload)),
    addAdminTagHead: (taghead, cb) => dispatch(addAdminTagHead(taghead, cb)),
    editAdminTagHead: (id, taghead, cb) =>
      dispatch(editAdminTagHead(id, taghead, cb)),
    getByIdAdminTagHead: id => dispatch(getByIdAdminTagHead(id)),
    deleteAdminTagHead: (id, cb) => dispatch(deleteAdminTagHead(id, cb)),
    clearAddTagHead: () => dispatch(clearAddTagHead()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TagHead);
