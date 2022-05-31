import { connect } from 'react-redux';
import Property from './Property';
import { getAdminProperty, deleteAdminProperty } from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    adminProperty: state.adminpropertyReducer.adminProperty,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAdminProperty: params => dispatch(getAdminProperty(params)),
    deleteAdminProperty: (id, cb) => dispatch(deleteAdminProperty(id, cb)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Property);
