import { connect } from 'react-redux';
import AddOffplan from './AddOffplan';
import {
  changeAdminOffplanInput,
  addAdminOffplan,
  getAmenityOffplan,
  editAdminOffplan,
  getAdminOffplanById,
  clearUpload,
  clearAddOffplan,
  changeAdminOffplanMultipleInput,
} from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    env: state.adminaddoffplanReducer.env,
    offplanValue: state.adminaddoffplanReducer.offplanValue,
    offplanOptions: state.adminaddoffplanReducer.offplanOptions,
    images: state.uploadReducer.link,
    imgLoading: state.uploadReducer.loading,
    imgError: state.uploadReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInputChange: payload => dispatch(changeAdminOffplanInput(payload)),
    addAdminOffplan: (payload, cb) => dispatch(addAdminOffplan(payload, cb)),
    editAdminOffplan: (id, payload, cb) =>
      dispatch(editAdminOffplan(id, payload, cb)),
    getAmenityOffplan: payload => dispatch(getAmenityOffplan(payload)),
    getAdminOffplanById: id => dispatch(getAdminOffplanById(id)),
    clearUpload: () => dispatch(clearUpload()),
    clearAddOffplan: () => dispatch(clearAddOffplan()),
    changeAdminOffplanMultipleInput: (mk, k, v, i) =>
      dispatch(changeAdminOffplanMultipleInput(mk, k, v, i)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOffplan);
