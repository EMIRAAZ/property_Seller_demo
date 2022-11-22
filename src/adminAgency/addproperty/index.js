import { connect } from 'react-redux';
import AddProperty from './AddProperty';
import {
  changeAgencyPropertyInput,
  addAgencyProperty,
  getAgencyAgentProperty,
  getAgencyAmenityProperty,
  editAgencyProperty,
  getAgencyPropertyById,
  clearUpload,
  getAgencyNeighborhoodProperty,
  getAgencyTaglineProperty,
  deleteAgencyPropertyImages,
  addAgencyPropertyImages,
} from '../../redux/actions';

const mapStateToProps = state => {
  return {
    env: state.agencyaddpropertyReducer.env,
    propertyValue: state.agencyaddpropertyReducer.propertyValue,
    propertyOptions: state.agencyaddpropertyReducer.propertyOptions,
    images: state.uploadReducer.link,
    imgLoading: state.uploadReducer.loading,
    imgError: state.uploadReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInputChange: payload => dispatch(changeAgencyPropertyInput(payload)),
    addAgencyProperty: (payload, cb) =>
      dispatch(addAgencyProperty(payload, cb)),
    editAgencyProperty: (id, payload, cb) =>
      dispatch(editAgencyProperty(id, payload, cb)),
    getAgencyAgentProperty: payload =>
      dispatch(getAgencyAgentProperty(payload)),
    getAgencyTaglineProperty: payload =>
      dispatch(getAgencyTaglineProperty(payload)),
    getAgencyNeighborhoodProperty: payload =>
      dispatch(getAgencyNeighborhoodProperty(payload)),
    getAgencyAmenityProperty: payload =>
      dispatch(getAgencyAmenityProperty(payload)),
    getAgencyPropertyById: id => dispatch(getAgencyPropertyById(id)),
    clearUpload: () => dispatch(clearUpload()),
    deleteAgencyPropertyImages: payload =>
      dispatch(deleteAgencyPropertyImages(payload)),
    addAgencyPropertyImages: payload =>
      dispatch(addAgencyPropertyImages(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProperty);
