import { connect } from 'react-redux';
import AddProperty from './AddProperty';
import {
  changeAdminPropertyInput,
  addAdminProperty,
  getAgentProperty,
  getAmenityProperty,
  editAdminProperty,
  getAdminPropertyById,
  clearUpload,
} from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    env: state.adminaddpropertyReducer.env,
    propertyValue: state.adminaddpropertyReducer.propertyValue,
    propertyOptions: state.adminaddpropertyReducer.propertyOptions,
    images: state.uploadReducer.link,
    imgLoading: state.uploadReducer.loading,
    imgError: state.uploadReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInputChange: payload => dispatch(changeAdminPropertyInput(payload)),
    addAdminProperty: (payload, cb) => dispatch(addAdminProperty(payload, cb)),
    editAdminProperty: (id, payload, cb) =>
      dispatch(editAdminProperty(id, payload, cb)),
    getAgentProperty: payload => dispatch(getAgentProperty(payload)),
    getAmenityProperty: payload => dispatch(getAmenityProperty(payload)),
    getAdminPropertyById: id => dispatch(getAdminPropertyById(id)),
    clearUpload: () => dispatch(clearUpload()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProperty);
