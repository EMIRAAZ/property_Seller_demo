import { connect } from 'react-redux';
import AddProperty from './AddProperty';
import { getAdminProperty } from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    adminProperty: state.adminpropertyReducer.adminProperty,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAdminProperty: params => dispatch(getAdminProperty(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProperty);
