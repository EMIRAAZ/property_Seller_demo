import { connect } from 'react-redux';
import Property from './Property';
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

export default connect(mapStateToProps, mapDispatchToProps)(Property);
