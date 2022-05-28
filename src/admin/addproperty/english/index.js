import { connect } from 'react-redux';
import AddProperty from './AddProperty';
import { changeAdminPropertyInput } from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    addProperty: state.adminaddpropertyReducer.property,
    sale: state.adminaddpropertyReducer.sale,
    propertyType: state.adminaddpropertyReducer.propertyType,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInputChange: payload => dispatch(changeAdminPropertyInput(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProperty);
