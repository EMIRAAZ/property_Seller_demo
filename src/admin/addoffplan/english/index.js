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
  deleteAdminOffplanMultipleInput,
  addNewBoxOffplan,
  getAgentOffplan,
  addOffplanImages,
  deleteOffplanImages,
  addOffplanImgPrcAvl,
  deleteOffplanImagePriceAvail,
  getCityByEmirateOffplan,
  getCityOffplan,
} from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    env: state.adminaddoffplanReducer.env,
    offplanValue: state.adminaddoffplanReducer.offplanValue,
    offplanOptions: state.adminaddoffplanReducer.offplanOptions,
    images: state.uploadReducer.link,
    imgLoading: state.uploadReducer.loading,
    imgError: state.uploadReducer.error,
    offplanLink: state.uploadReducer.offplanLink,
    offplanLoading: state.uploadReducer.offplanLoading,
    offplanError: state.uploadReducer.offplanError,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInputChange: payload => dispatch(changeAdminOffplanInput(payload)),
    addNewBoxOffplan: (mk, v) => dispatch(addNewBoxOffplan(mk, v)),
    addAdminOffplan: (payload, cb) => dispatch(addAdminOffplan(payload, cb)),
    editAdminOffplan: (id, payload, cb) =>
      dispatch(editAdminOffplan(id, payload, cb)),
    getAmenityOffplan: payload => dispatch(getAmenityOffplan(payload)),
    getAdminOffplanById: id => dispatch(getAdminOffplanById(id)),
    clearUpload: () => dispatch(clearUpload()),
    clearAddOffplan: () => dispatch(clearAddOffplan()),
    changeAdminOffplanMultipleInput: (mk, k, v, i) =>
      dispatch(changeAdminOffplanMultipleInput(mk, k, v, i)),
    deleteAdminOffplanMultipleInput: (mk, i) =>
      dispatch(deleteAdminOffplanMultipleInput(mk, i)),
    getAgentOffplan: () => dispatch(getAgentOffplan()),
    addOffplanImages: payload => dispatch(addOffplanImages(payload)),
    deleteOffplanImages: payload => dispatch(deleteOffplanImages(payload)),
    addOffplanImgPrcAvl: (formData, key, position) =>
      dispatch(addOffplanImgPrcAvl(formData, key, position)),
    deleteOffplanImagePriceAvail: (name, key, position) =>
      dispatch(deleteOffplanImagePriceAvail(name, key, position)),
    getCityOffplan: () => dispatch(getCityOffplan()),
    getCityByEmirateOffplan: emirate =>
      dispatch(getCityByEmirateOffplan(emirate)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOffplan);
