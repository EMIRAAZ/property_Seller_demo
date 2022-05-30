import { connect } from 'react-redux';
import AddProperty from './AddProperty';
import {
  changeAdminPropertyInput,
  addAdminProperty,
  getAgentProperty,
} from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    addProperty: state.adminaddpropertyReducer.property,
    sale: state.adminaddpropertyReducer.sale,
    propertyType: state.adminaddpropertyReducer.propertyType,
    images: state.uploadReducer.link,
    agent: state.adminaddpropertyReducer.agent,
    amenities: state.adminaddpropertyReducer.amenities,
    imgLoading: state.uploadReducer.loading,
    imgError: state.uploadReducer.error,
    addAdmin: state.adminaddpropertyReducer.addAdmin,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInputChange: payload => dispatch(changeAdminPropertyInput(payload)),
    addAdminProperty: (payload, cb) => dispatch(addAdminProperty(payload, cb)),
    getAgentProperty: payload => dispatch(getAgentProperty(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProperty);
