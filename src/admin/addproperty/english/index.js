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
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInputChange: payload => dispatch(changeAdminPropertyInput(payload)),
    addAdminProperty: payload => dispatch(addAdminProperty(payload)),
    getAgentProperty: payload => dispatch(getAgentProperty(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProperty);
